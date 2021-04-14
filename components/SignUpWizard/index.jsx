import { useState } from 'react';
import CreateAccountStep from './CreateAccountStep';

export default function SignUpWizard() {
  const [step, setStep] = useState(0);

  return (
    <div>
      <CreateAccountStep setStep={setStep} />
    </div>
  );
}
