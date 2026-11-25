export type PreviewId =
  | "warehouse-dashboard"
  | "vehicle-plate"
  | "aruco-tracking"
  | "whatsapp-reports"
  | "ocr-reader"
  | "security-onion"
  | "timu-web"
  | "alba-web";

interface PreviewImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PreviewImage = ({ src, alt, className = "" }: PreviewImageProps) => (
  <img
    src={src}
    alt={alt}
    referrerPolicy="no-referrer"
    loading="lazy"
    className={`w-full h-auto rounded-xl border-2 border-[var(--ink)] bg-card object-cover ${className}`}
  />
);

export const ProjectPreview = ({ id }: { id: PreviewId }) => {
  switch (id) {
    case "warehouse-dashboard":
      return (
        <div className="space-y-2">
          <PreviewImage
            src="/projects/warehouse_dashboard.png"
            alt="Dashboard Warehouse Intelligence landing page and live overview"
          />
          <p className="text-xs text-muted-foreground">Landing page and dashboard overview</p>
        </div>
      );

    case "vehicle-plate":
      return (
        <div className="space-y-2.5">
          <div className="grid sm:grid-cols-2 gap-2.5 items-start">
            <PreviewImage
              src="/projects/vehicle_history.png"
              alt="Riwayat Kendaraan log showing entry and exit truck detection"
            />
            <PreviewImage
              src="/projects/vehicle_event.png"
              alt="Vehicle event detection showing license plate, camera location, and bounding box"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Vehicle event: license plate, camera location, confidence score (plate masked)
          </p>
        </div>
      );

    case "aruco-tracking":
      return (
        <div className="space-y-2.5">
          <div className="grid sm:grid-cols-[1.25fr_0.9fr] gap-2.5 items-center">
            <PreviewImage
              src="/projects/aruco_camera.png"
              alt="Warehouse camera tracking pallets with ArUco markers"
            />
            <PreviewImage
              src="/projects/aruco_tracker_ui.png"
              alt="ArUco item zone transition timeline and alert log"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Items with ArUco markers tracked by warehouse cameras
          </p>
        </div>
      );

    case "whatsapp-reports":
      return (
        <div className="space-y-2">
          <PreviewImage
            src="/projects/whatsapp_reports.png"
            alt="Automated daily Excel reports and detection alerts sent via WhatsApp"
          />
          <p className="text-xs text-muted-foreground">
            Automated Excel logs, incident chatbot export &amp; CCTV alerts via WhatsApp
          </p>
        </div>
      );

    case "ocr-reader":
      return (
        <div className="space-y-2">
          <PreviewImage
            src="/projects/ocr_reader.png"
            alt="Document archive search and OCR extraction result"
          />
          <p className="text-xs text-muted-foreground">
            Document archive with search, and an OCR extraction result (contact details masked)
          </p>
        </div>
      );

    case "security-onion":
      return (
        <div className="space-y-2">
          <PreviewImage
            src="/projects/security_onion.png"
            alt="Security Onion console, Suricata alerts, and GLPI dashboard at PT INKA"
          />
          <p className="text-xs text-muted-foreground">
            Security Onion console, Suricata alert inspection &amp; GLPI monitoring
          </p>
        </div>
      );

    case "timu-web":
      return (
        <div className="space-y-2">
          <PreviewImage
            src="/projects/timu_website.png"
            alt="Official website of PT Terminal Intimoda Utama"
          />
        </div>
      );

    case "alba-web":
      return (
        <div className="space-y-2">
          <PreviewImage
            src="/projects/alba_website.png"
            alt="Alba Nusantara Commodity landing page and About Us section"
          />
          <p className="text-xs text-muted-foreground">Landing page and About Us section</p>
        </div>
      );
  }
};
