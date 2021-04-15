import { useState } from 'react';
import CreateAccountStep from './CreateAccountStep';
import CustomizeStep from './CustomizeStep';
import { SignUpProvider } from '../../context/SignUpContext';

export default function SignUpWizard() {
  const [step, setStep] = useState(0);

  const steps = [
    <CreateAccountStep setStep={setStep} />,
    <CustomizeStep setStep={setStep} />,
  ];

  return <SignUpProvider>{steps[step]}</SignUpProvider>;
}
