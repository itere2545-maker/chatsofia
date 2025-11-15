import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RitualModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  subtitle: string;
  content: string;
}

const RitualModal = ({ open, onOpenChange, title, subtitle, content }: RitualModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] md:max-w-[800px] h-[88vh] p-0 flex flex-col overflow-hidden">
        <DialogHeader className="px-6 md:px-10 pt-8 md:pt-10 pb-4">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-primary mb-3">
            {title}
          </DialogTitle>
          <p className="text-base md:text-lg italic text-foreground-secondary">
            "{subtitle}"
          </p>
        </DialogHeader>
        
        <ScrollArea className="px-6 md:px-10 pb-8 md:pb-10 flex-1 h-[70vh]">
          <div 
            className="prose prose-sm md:prose-base max-w-none ritual-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default RitualModal;
