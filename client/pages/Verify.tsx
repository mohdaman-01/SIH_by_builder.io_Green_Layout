import UploadBox from "@/components/UploadBox";

export default function Verify() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Verify a certificate</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload a certificate to validate its authenticity using AI-driven checks, OCR, QR decoding, and cryptographic hashes against institutional registries.
          </p>
        </div>
        <UploadBox />
        <p className="text-xs text-muted-foreground text-center">
          We never store your file. All verification runs locally, with optional server validation when institutions are connected.
        </p>
      </div>
    </main>
  );
}
