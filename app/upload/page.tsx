export default function UploadPage() {
  return (
    <div className="main-content">
      <div className="card">
        <h1>Authentication Upload Queue</h1>
        <p>Upload dial, bracelet, movement, clasp, and serial images for AI analysis.</p>

        <input type="file" multiple />
      </div>
    </div>
  )
}
