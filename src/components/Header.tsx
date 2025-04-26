'use client';

import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import ShareOutlined from '@mui/icons-material/IosShareOutlined';
import { Button, Menu, MenuItem, Tooltip } from '@mui/material';;
// import MobileNav from './MobileNav';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useIsMobile from '@/hooks/useIsMobile';

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isMobile = useIsMobile()
  const isLargeScreen = !isMobile;
  const [currentRoute, setCurrentRoute] = useState<string>(pathname || '');
  const [mainMenuActive, setMainMenuActive] = useState<number>(0);
  const [mainMenuActiveBackup, setMainMenuActiveBackup] = useState<number>(0);
  const [stickyStyle, setStickyStyle] = useState<CSSProperties>({});
  const [fixedLogoStyle, setFixedLogoStyle] = useState<CSSProperties>({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);  // 新增这行

  // Build navigation items
  const navigations = React.useMemo(() => {
    const FinanceSubMenu = [
      { name: 'Fair Launchpads', url: '/launchpad/list', isActive: currentRoute.includes('/launchpad') },
      { name: 'Sale Launchpads', url: '/sale-launchpad/list', isActive: currentRoute.includes('/sale-launchpad') }
    ];

    return [
      { name: 'Project', isActive: currentRoute.includes('/project'), link: '/project/list' },
      { name: 'Launchpad', isActive: FinanceSubMenu.some(e => e.isActive), subMenu: FinanceSubMenu },
      { name: 'Bounties', isActive: currentRoute.includes('/bounty'), link: '/bounty/list' },
      { name: 'Governance', isActive: currentRoute.includes('/governance'), link: '/governance/list' },
      {
        name: 'CreateToken',
        icon: (
          <ShareOutlined
            className={isLargeScreen ? 'h-3.5 w-3.5 mt-[-3px]' : 'h-4 w-4 text-color2'}
          />
        ),
        link: 'https://tokentool.bitbond.com/createtoken'
      }
    ];
  }, [currentRoute, isLargeScreen]);

  // Update active menu on route change
  useEffect(() => {
    setCurrentRoute(pathname);
    const idx = navigations.findIndex(item => item.isActive);
    setMainMenuActive(idx);
  }, [pathname, navigations]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
        setStickyStyle({
          background: 'rgba(255, 255, 255, .8)',
          boxShadow: '0px 6px 8px rgba(215, 220, 222, 0.2)',
          backdropFilter: 'blur(3.5px)'
        });
      } else {
        setStickyStyle({});
      }
      if (scrollTop > 20) {
        setFixedLogoStyle({ top: '12px' });
      } else {
        setFixedLogoStyle({});
      }
    };

    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, []);


  const handleLinkClick = (link: string) => {
    if (link.includes('//')) {
      window.open(link, '_blank');
    } else {
      router.push(link);
    }
  };



  const goHome = () => router.replace('/');

  return (
    <>
      <div
        className="px-10 relative top-0 z-11 <lg:z-3000 <lg:fixed left-0 right-0 <lg:flex items-center <lg:px-4 <lg:py-2 bg-color-body"
        style={stickyStyle}
      >
        <div
          className="cursor-pointer flex transition-all top-5 left-4 z-10 fixed items-center <lg:static"
          style={fixedLogoStyle}
          onClick={goHome}
        >
          <img src="/logo.png" className={`${isMobile ? 'w-7' : 'w-9'}`} alt="" />
        </div>
        <div className="flex-1 hidden <lg:block">
          {/* <MobileNav className="h-10 ml-2 w-10" navigations={navigations} />
           */}
          MobileNav
        </div>

        <div className="mt-0.5 u-page-container <lg:hidden">
          <div className="flex border-[#F1F0F0] border-b-1 h-16 text-color2 justify-center items-center">
            {navigations.map((item, index) =>
              item.subMenu ? (
                <React.Fragment key={item.name}>
                  <Button
                    id={`nav-button-${index}`}
                    aria-controls={mainMenuActive === index ? `nav-menu-${index}` : undefined}
                    aria-haspopup="true"
                    aria-expanded={mainMenuActive === index ? 'true' : undefined}
                    className={`u-h5 font-bold px-1 not-last:mr-4 ${item.isActive ? 'text-color1' : ''}`}
                    onClick={(e) => {
                      setAnchorEl(e.currentTarget);
                    }}
                    sx={{
                      color: item.isActive ? 'text-color1' : 'inherit',
                      textTransform: 'none',  // 新增这行
                      '&:hover': {
                        color: 'text-color1'
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                  <Menu
                    id={`nav-menu-${index}`}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => {
                      setAnchorEl(null);
                    }}
                  >
                    {item.subMenu.map((nav) => (
                      <MenuItem
                        key={nav.name}
                        onClick={() => {
                          nav.url && router.push(nav.url);
                          setAnchorEl(null);
                        }}
                        sx={{
                          color: nav.isActive ? 'primary' : 'inherit'
                        }}
                      >
                        {nav.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Button
                  key={item.name}
                  className={`flex items-center u-h5 font-bold px-1 not-last:mr-4 ${item.isActive ? 'text-color1' : ''}`}
                  onClick={() => handleLinkClick(item.link)}
                  sx={{
                    color: item.isActive ? 'text-color1' : 'inherit',
                    textTransform: 'none',  // 新增这行
                    '&:hover': {
                      color: 'text-color1'
                    }
                  }}
                >
                  <span className="mr-1">{item.name}</span>
                  {item.icon}
                </Button>
              )
            )}
          </div>
        </div>

        <div className="flex ml-auto top-4 right-4 gap-x-2.5 absolute items-center <lg:static">
          <ConnectButton />
          {/* {isLargeScreen && <CreateBlock />}
          <NetworkSwitcher />
          <WalletAddress />
          {!isLargeScreen && <CreateBlock />} */}
        </div>
      </div>
    </>
  );
};

export default Header;
