import * as React from 'react';

interface PasswordRecoveryIconProps {
    className?: string;
}

export const PasswordRecovery: React.FC<PasswordRecoveryIconProps> = (props: PasswordRecoveryIconProps) => {
    return (
<svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_352_8893)">
<rect width="140" height="140" rx="70" fill="#F2F5F8"/>
<circle cx="24" cy="30" r="40" fill="#F2F5F8"/>
<rect x="77" y="79" width="70" height="70" fill="#F2F5F8"/>
<path d="M47.809 69C47.809 56.7442 57.7442 46.809 70 46.809C82.2558 46.809 92.191 56.7442 92.191 69V105.191H47.809V69Z" stroke="#38BCA4" stroke-width="13.618" stroke-linejoin="round"/>
<rect x="25" y="72" width="90" height="68" rx="22.6966" fill="#16837C"/>
<rect x="64" y="97" width="12" height="22" rx="6" fill="#F2F5F8"/>
</g>
<defs>
<clipPath id="clip0_352_8893">
<rect width="140" height="140" rx="70" fill="white"/>
</clipPath>
</defs>
</svg>

    );
};
