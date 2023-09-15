import { figmaToCode, initMidEnd, DEFAULT_CONFIG } from '@firejet/firejet-js';

initMidEnd();

figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'convert') {
    const selectedId = figma.currentPage.selection[0].id;
    if (!selectedId) {
      console.log('No frame selected!');
    }
    console.log('Converting...');
    const folder = await figmaToCode(selectedId, DEFAULT_CONFIG);
    console.log('Conversion Done!', { folder });
  }
};
