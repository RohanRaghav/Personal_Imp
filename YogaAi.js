import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";
import ml5 from "ml5";

function YogaAi(props) {
  const o = props.label; // Get the 'label' prop value and store it in variable 'o'
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let video;
    let poseNet;
    let pose;
    let brain;
    var k;
    var selectedLabel;
    let state = "waiting";
    let targetLabel;

    // Create a canvas using the useRef hook
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Request camera access permission
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        // Create a video element to display the camera feed
        video = videoRef.current;
        video.srcObject = stream; // Assign the camera stream to the video element
        video.play();

        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on("pose", gotPoses);

        let options = {
          inputs: 34,
          outputs: 3,
          task: "classification",
          debug: true,
        };
        brain = ml5.neuralNetwork(options);
        const modelInfo = {
          model: "500_epoch_all/model.json",
          metadata: "500_epoch_all/model_meta.json",
          weights: "500_epoch_all/model.weights.bin",
        };
        brain.load(modelInfo, brainLoaded);
      })
      .catch(function (error) {
        // User denied camera access or other error occurred
        console.error("Error accessing camera:", error);
      });

    function brainLoaded() {
      console.log("Pose Classification Ready!");
      classifyPose();
    }

    function classifyPose() {
      if (pose) {
        let inputs = [];
        for (let i = 0; i < pose.keypoints.length; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;
          inputs.push(x);
          inputs.push(y);
        }

        brain.classify(inputs, gotResult);
      } else {
        // Increase the timeout value to run the function less frequently
        setTimeout(classifyPose, 500); // Change 500 to your desired duration in milliseconds
      }
    }

    function gotResult(results) {
      k = o; // Set 'k' to the value of 'o'
      if (pose) {
        if (results && results.length > 0) {
          for (let i = 0; i < results.length; i++) {
            if (results[i].label === k) {
              selectedLabel = i;
            }
          }

          console.log(results[selectedLabel].confidence);

          // Set the value of the range element to the confidence value
          // You can update your UI elements here instead of using document.getElementById
          // For example, set the state to trigger a re-render and update UI accordingly
          // Update state with results[selectedLabel].confidence
          // Play audio based on confidence

          if (results[selectedLabel].confidence > 0.5) {
            // Create a new Audio object
            var audio = new Audio();
            audio.src = "ring_sound.mp3";
            audio.volume = 1;
            audio.play();
          }
        }
      }
      classifyPose();
    }

    function gotPoses(poses) {
      if (poses.length > 0) {
        pose = poses[0].pose;

        if (state === "collecting") {
          let inputs = [];
          for (let i = 0; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            inputs.push(x);
            inputs.push(y);
          }
          let target = [targetLabel];

          brain.addData(inputs, target);
        }
      }
    }

    function modelLoaded() {
      console.log("poseNet ready");
    }

    // Your drawing code goes here
    function drawCanvas() {
      if (video) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Add your drawing code here
        if (pose) {
          // Your drawing code based on pose keypoints and skeleton
        }
      }

      // Request the next animation frame
      requestAnimationFrame(drawCanvas);
    }

    // Start the drawing loop
    drawCanvas();
  }, [o]);

  return (
    <div>
      {/* Add your canvas element */}
      <canvas ref={canvasRef} width={640} height={480}></canvas>

      <form>
        <label htmlFor="myRange">Accuracy:</label>
        <br />
        <input type="range" id="myRange" min="0" max="1" defaultValue="0" />
        <br />
        <label id="rangeLabel"></label>
      </form>

      {/* Add the video element */}
      <video ref={videoRef} style={{ display: "none" }}></video>
    </div>
  );
}

export default YogaAi;
