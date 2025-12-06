import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserPlus, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface SignUpModalProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function SignUpModal({ trigger, open, onOpenChange }: SignUpModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-primary">Join the Movement</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="text-center text-muted-foreground mb-2">
            Choose how you want to participate in the Renewed Hope Agenda.
          </div>
          
          <div className="grid gap-4">
            <Button asChild className="h-auto py-4 px-6 flex items-center justify-between group" variant="outline">
              <Link href="/ambassadors">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">Become an Ambassador</div>
                    <div className="text-sm text-muted-foreground">Lead the change in your community</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </Button>

            <Button asChild className="h-auto py-4 px-6 flex items-center justify-between group" variant="default">
              <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full text-white">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">Join as a Member</div>
                    <div className="text-sm text-primary-foreground/80">Sign up to support the vision</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
          
          <div className="text-center text-xs text-muted-foreground mt-2">
            By joining, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
