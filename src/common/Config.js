/**
 * CONFIGURATIONS FOR THE APP
 *  
 * All the duration constants are in milliseconds, i.e., 5 seconds is 5*1000 milliseconds.
 */

/**
 * ACTUAL DURATIONS - Uncomment before running experiment
 */
export const PlusScreenDuration = 40 * 1000;
export const EssayDuration = 7.5 * 60 * 1000;
export const MathDuration = 7.5 * 60 * 1000;
export const MathCorrectDuration = 1 * 1000;
export const VideoDuration = 6.75 * 60 * 1000;

/**
 * TEST DURATIONS - Comment before running experiment
*/
// export const PlusScreenDuration = 2 * 1000; // test
// export const EssayDuration = 2 * 1000; // test
// export const MathDuration = 1 * 60 * 1000; // test
// export const MathCorrectDuration = 1 * 1000; // test
// // export const VideoDuration = 6.75 * 60 * 1000; // test
// export const VideoDuration = 2 * 1000; // test

export const CommonInstructions = `
1. Go to the tobii eye tracker and caliberate your eyes to create a new eye profile
2. Open Logger Station and click on "Start Recording".
3. Click on the "Start Experiment" button on this page.
4. A white screen with a plus sign will appear. Keep looking at the + sign.
5. After the white screen disappears, the actual experiment will start.
6. The duration of each experiment is roughly 7-8 mins.
7. After the experiment ends, go to LoggerStation and click on "Stop Recording".
`;

export const EssayTopics = [
  "What is good stress and bad stress? Effects of these on mental and physical health.",
  "The impact of technology on classroom learning.",
  "What makes some people introverted or extroverted? What kind are you more compatible with and why?",
];

export const MathOperandMax = 16;
export const MathOperandMin = 1;
export const MathHardOperandMin = 11;

export const MusicVideoURL = "https://www.youtube.com/embed/n3EiRynr1Us?si=EgLp9izF3K5CuQev&amp;controls=0";

/**
 * Enable/disable Tobii Pro eye tracker recording functionality
 */
export const AutomaticEyeTrackerRecording = true;