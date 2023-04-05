declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png';
declare module '*.jpg';

declare module "*.svelte" {
    const value: any;
    export default value;
  }