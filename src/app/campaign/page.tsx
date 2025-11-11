import LinkPageForm from "@/components/LinkPageForm";

export const metadata = {
  title: "Share URL Link - Kasuwan Gizo",
};

export default function CampaignPage() {
  return (
    <main className="p-6">
      <div className="max-w-6xl mx-auto">
        <LinkPageForm />
      </div>
    </main>
  );
}
