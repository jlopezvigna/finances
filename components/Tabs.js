import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useAuthContext } from '../context/authContext';

const Tabs = () => {
  const { isUserAuthenticated } = useAuthContext();
  const router = useRouter();

  const value = useMemo(() => {
    switch (router.pathname) {
      case '/categories':
        return 1;
      case '/expenses':
        return 2;
      default:
        return 0;
    }
  }, [router.pathname]);

  if (!isUserAuthenticated()) {
    return null;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ position: 'fixed', bottom: 0, right: 0, left: 0, paddingTop: 1, paddingBottom: 1 }}
    >
      <MuiTabs value={value} aria-label="menu-tabs">
        <Link href="/" passHref>
          <MuiTab component="a" label="home" icon={<HomeOutlinedIcon />} />
        </Link>
        <Link href="/categories" passHref>
          <MuiTab component="a" label="categories" icon={<CategoryOutlinedIcon />} />
        </Link>
        <Link href="/expenses" passHref>
          <MuiTab component="a" label="expenses" icon={<AddCircleOutlineOutlinedIcon />} />
        </Link>
      </MuiTabs>
    </Box>
  );
};

export default Tabs;
