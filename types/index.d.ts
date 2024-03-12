export {}

declare global {
  interface HTMLMediaElement {
    srcObject: MediaProvider | null
  }
  
}