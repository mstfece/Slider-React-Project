 import cornerstoneTools from '@cornerstonejs/tools';
import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';
import dicomParser from 'dicom-parser';
import React from 'react';
import { RenderingEngine, Enums } from '@cornerstonejs/core';
const { ViewportType, Events } = Enums;

// ======== Constants ======= //
const renderingEngineId = 'myRenderingEngine';
const viewportId = 'CT_STACK';

// ======== Set up page ======== //

const content = document.getElementById('content');
const element = document.createElement('div');
element.id = 'cornerstone-element';
element.style.width = '500px';
element.style.height = '500px';

content.appendChild(element);
// ============================= //
// Get the rendering engine ''''' const imageIds = ['wadouri:../public/image-3.DCM']; ''''
const renderingEngine = getRenderingEngine(renderingEngineId);

// Get the stack viewport
const viewport = (
  renderingEngine.getViewport(viewportId)
);

if (!viewport) {
  return;
}
async function run() {
  // Init Cornerstone and related libraries
  await initDemo();

  // Get Cornerstone imageIds and fetch metadata into RAM
  const imageIds = ['wadouri:../public/image-3.DCM'];

  });

  // Create a stack viewport

  const viewportInput = {
    viewportId,
    type: ViewportType.STACK,
    element,
  };

  renderingEngine.enableElement(viewportInput);

  // Get the stack viewport that was created
  const viewport = (
    renderingEngine.getViewport(viewportId)
  );

  // Define a stack containing a few images
  const stack = [imageIds[0], imageIds[1], imageIds[2]];

  // Set the stack on the viewport
  await viewport.setStack(stack);

  // Set the VOI of the stack
  viewport.setProperties({ voiRange: ctVoiRange });

  // Render the image
  viewport.render();
}

run();
