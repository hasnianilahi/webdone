import Image from 'next/image';

interface Logo {
    name: string;
    icon: string;
    business?: {
        name: string;
    };
    alt: string;
    size: number;
    quality?: number;
}

const Logo = () => {
    const logo: Logo = {
        name: 'webdone',
        icon: 'business-icon',
        business: {
            name: 'webdone',
        },
        alt: 'webdone logo',
        size: 100,
        quality: 75,
    };

    return (
        <>
            <a
                href="/"
                title={`View ${logo.icon} logo for ${logo.business?.name}`}
            >
                <Image
                    src="/logo.png"
                    alt={logo.alt}
                    width={logo.size}
                    height={logo.size}
                    priority // Adding priority property for LCP optimization
                    quality={logo.quality}
                />
            </a>
        </>
    );
}

export default Logo;

