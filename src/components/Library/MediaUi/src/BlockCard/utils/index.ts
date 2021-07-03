import { constants } from '@discovr/core.theme';
import facepaint from 'facepaint';

const { gridSize, borderRadius } = constants;

const gs = (times: number) => `${gridSize() * times}px`;
const br = (times = 1) => `${borderRadius() * times}px`;
const mq = facepaint(['@media(min-width: 576px)']);

export { gs, br, mq };
