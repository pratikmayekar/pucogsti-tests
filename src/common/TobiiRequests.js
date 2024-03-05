import axios from "axios";

async function getEyeTrackerStatus() {
  const result = await axios.get("http://localhost:8765/tobii_pro/status/");
  return result.data;
}
async function getRecordingStatus() {
  const result = await axios.get("http://localhost:8765/recording/status/");
  return result.data;
}
async function startRecording() {
  const result = await axios.get("http://localhost:8765/recording/start/");
  return result.data;
}
async function stopRecording() {
  const result = await axios.get("http://localhost:8765/recording/stop/");
  return result.data;
}

export const triggerStartRecording = async () => {
  try {
    const [tobiiStatusData, recordingStatusData] = await Promise.all([
      getEyeTrackerStatus(),
      getRecordingStatus(),
    ]);
    const isConnected =
      tobiiStatusData &&
      tobiiStatusData.is_connected == true &&
      tobiiStatusData.is_supported == true;
    const isRecording =
      recordingStatusData && recordingStatusData.is_recording == true;

    if (isRecording) {
      throw new Error("Error: Tobii Pro was already recording.");
    }

    if (isConnected) {
      const data = await startRecording();
      console.log(data);
      return data;
    } else {
      throw new Error("Error: Tobii Pro not connected.");
    }
  } catch (e) {
    alert(JSON.stringify(e));
    console.log(e);
  }
};

export const triggerStopRecording = async () => {
  try {
    const [tobiiStatusData, recordingStatusData] = await Promise.all([
      getEyeTrackerStatus(),
      getRecordingStatus(),
    ]);
    const isConnected = tobiiStatusData && tobiiStatusData.is_connected == true;
    // && tobiiStatusData.is_supported==true;
    const isRecording =
      recordingStatusData && recordingStatusData.is_recording == true;

    if (isConnected && isRecording) {
      const data = await stopRecording();
      console.log(data);
      return data;
    } else {
      throw new Error("Error: Tobii Pro was not recording.");
    }
  } catch (e) {
    alert(JSON.stringify(e));
    console.log(e);
  }
};
