import React from 'react'
import { Box, Container, Group } from '@mantine/core'
import { UserProfile } from '@/components/layout/UserProfile'
import Link from 'next/link'
import { MantineProviders } from '@/providers/MantineProviders'
import { ErrorBoundary, HighlightInit } from '@highlight-run/next/client'
import { Footer } from '@/components/layout/Footer'

type Props = {
  children: React.ReactNode
  fullWidth?: boolean
}

const Logo = () => {
  return (
    <Group>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 1.73205C20.8564 0.660254 23.1436 0.660254 25 1.73205L38.0526 9.26795C39.909 10.3397 41.0526 12.3205 41.0526 14.4641V29.5359C41.0526 31.6795 39.909 33.6603 38.0526 34.7321L25 42.2679C23.1436 43.3397 20.8564 43.3397 19 42.2679L5.94744 34.7321C4.09104 33.6603 2.94744 31.6795 2.94744 29.5359V14.4641C2.94744 12.3205 4.09103 10.3397 5.94744 9.26795L19 1.73205Z"
          fill="#ED3733"
        />
        <rect
          x="13.1997"
          y="29.0398"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="13.1997"
          y="25.5195"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="16.7197"
          y="22.001"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="20.2402"
          y="22.001"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="27.2793"
          y="29.0398"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="23.7603"
          y="25.5195"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="13.1997"
          y="18.4807"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="13.1997"
          y="14.9604"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="13.1997"
          y="11.4402"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="20.2402"
          y="18.4807"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="23.7603"
          y="14.9604"
          width="3.52"
          height="3.52"
          fill="black"
        />
        <rect
          x="27.2793"
          y="11.4402"
          width="3.52"
          height="3.52"
          fill="black"
        />
      </svg>
      <svg
        width="101"
        height="21"
        viewBox="0 0 101 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H3.22941V7.98891C3.22941 8.25821 3.43253 8.46133 3.70183 8.46133H8.15814C8.42744 8.46133 8.63056 8.25821 8.63056 7.98891V6.46587C8.63056 6.00186 8.99153 5.64089 9.45554 5.64089H11.035C11.3043 5.64089 11.5074 5.43777 11.5074 5.16847V3.64542C11.5074 3.18141 11.8684 2.82045 12.3324 2.82045H13.9118C14.1811 2.82045 14.3843 2.61732 14.3843 2.34802V0.82498C14.3843 0.360966 14.7452 0 15.2092 0H16.7887C17.2527 0 17.6137 0.360966 17.6137 0.82498V2.34802C17.6137 2.81203 17.2527 3.173 16.7887 3.173H15.2375C14.9582 3.173 14.7368 3.38575 14.7368 3.64542V5.16847C14.7368 5.63248 14.3759 5.99345 13.9118 5.99345H12.3606C12.0814 5.99345 11.86 6.20619 11.86 6.46587V7.98891C11.86 8.45292 11.499 8.81389 11.035 8.81389H9.45554C9.18624 8.81389 8.98312 9.01701 8.98312 9.28631V10.8094C8.98312 11.0787 9.18624 11.2818 9.45554 11.2818H11.035C11.499 11.2818 11.86 11.6427 11.86 12.1068V13.6298C11.86 13.8895 12.0814 14.1022 12.3606 14.1022H13.9118C14.3759 14.1022 14.7368 14.4632 14.7368 14.9272V16.4502C14.7368 16.7099 14.9582 16.9227 15.2375 16.9227H16.7887C17.2527 16.9227 17.6137 17.2836 17.6137 17.7476V19.2707C17.6137 19.7347 17.2527 20.0957 16.7887 20.0957H15.2092C14.7452 20.0957 14.3843 19.7347 14.3843 19.2707V17.7476C14.3843 17.4783 14.1811 17.2752 13.9118 17.2752H12.3324C11.8684 17.2752 11.5074 16.9143 11.5074 16.4502V14.9272C11.5074 14.6579 11.3043 14.4548 11.035 14.4548H9.45554C8.99153 14.4548 8.63056 14.0938 8.63056 13.6298V12.1068C8.63056 11.8375 8.42744 11.6343 8.15814 11.6343H3.70183C3.43253 11.6343 3.22941 11.8375 3.22941 12.1068V20.0957H0V12.1068C0 11.6427 0.360967 11.2818 0.82498 11.2818H2.40443C2.67373 11.2818 2.87685 11.0787 2.87685 10.8094V9.28631C2.87685 9.01701 2.67373 8.81389 2.40443 8.81389H0.82498C0.360967 8.81389 0 8.45292 0 7.98891V0ZM21.8088 20.0957V16.9227H26.3251C26.5944 16.9227 26.7975 16.7195 26.7975 16.4502V3.64542C26.7975 3.37612 26.5944 3.173 26.3251 3.173H21.8088V0H26.3251C26.7891 0 27.1501 0.360966 27.1501 0.82498V2.34802C27.1501 2.61732 27.3532 2.82045 27.6225 2.82045H29.2019C29.4712 2.82045 29.6744 2.61732 29.6744 2.34802V0.82498C29.6744 0.360966 30.0353 0 30.4993 0H35.0156V3.173H30.4993C30.23 3.173 30.0269 3.37612 30.0269 3.64542V16.4502C30.0269 16.7195 30.23 16.9227 30.4993 16.9227H35.0156V20.0957H30.4993C30.0353 20.0957 29.6744 19.7347 29.6744 19.2707V17.7476C29.6744 17.4783 29.4712 17.2752 29.2019 17.2752H27.6225C27.3532 17.2752 27.1501 17.4783 27.1501 17.7476V19.2707C27.1501 19.7347 26.7891 20.0957 26.3251 20.0957H21.8088ZM78.6333 5.99345H75.4038V3.64542C75.4038 3.37612 75.2007 3.173 74.9314 3.173H64.7214C64.4521 3.173 64.249 3.37612 64.249 3.64542V7.98891C64.249 8.25821 64.4521 8.46133 64.7214 8.46133H74.9314C75.3954 8.46133 75.7564 8.8223 75.7564 9.28631V10.8094C75.7564 11.0787 75.9595 11.2818 76.2288 11.2818H77.8083C78.2723 11.2818 78.6333 11.6427 78.6333 12.1068V16.4502C78.6333 16.9143 78.2723 17.2752 77.8083 17.2752H76.2288C75.9595 17.2752 75.7564 17.4783 75.7564 17.7476V19.2707C75.7564 19.7347 75.3954 20.0957 74.9314 20.0957H64.7214C64.2574 20.0957 63.8964 19.7347 63.8964 19.2707V17.7476C63.8964 17.4783 63.6933 17.2752 63.424 17.2752H61.8446C61.3805 17.2752 61.0196 16.9143 61.0196 16.4502V14.1022H64.249V16.4502C64.249 16.7195 64.4521 16.9227 64.7214 16.9227H74.9314C75.2007 16.9227 75.4038 16.7195 75.4038 16.4502V12.1068C75.4038 11.8375 75.2007 11.6343 74.9314 11.6343H64.7214C64.2574 11.6343 63.8964 11.2734 63.8964 10.8094V9.28631C63.8964 9.01701 63.6933 8.81389 63.424 8.81389H61.8446C61.3805 8.81389 61.0196 8.45292 61.0196 7.98891V3.64542C61.0196 3.18141 61.3805 2.82045 61.8446 2.82045H63.424C63.6933 2.82045 63.8964 2.61732 63.8964 2.34802V0.82498C63.8964 0.360967 64.2574 0 64.7214 0H74.9314C75.3954 0 75.7564 0.360967 75.7564 0.82498V2.34802C75.7564 2.61732 75.9595 2.82045 76.2288 2.82045H77.8083C78.2723 2.82045 78.6333 3.18141 78.6333 3.64542V5.99345ZM82.8284 0H86.0578V7.98891C86.0578 8.25821 86.2609 8.46133 86.5303 8.46133H90.9866C91.2559 8.46133 91.459 8.25821 91.459 7.98891V6.46587C91.459 6.00186 91.8199 5.64089 92.284 5.64089H93.8634C94.1327 5.64089 94.3358 5.43777 94.3358 5.16847V3.64542C94.3358 3.18141 94.6968 2.82045 95.1608 2.82045H96.7403C97.0096 2.82045 97.2127 2.61732 97.2127 2.34802V0.82498C97.2127 0.360967 97.5737 0 98.0377 0H99.6171C100.081 0 100.442 0.360967 100.442 0.82498V2.34802C100.442 2.81203 100.081 3.173 99.6171 3.173H98.0659C97.7867 3.173 97.5652 3.38575 97.5652 3.64542V5.16847C97.5652 5.63248 97.2043 5.99345 96.7403 5.99345H95.189C94.9098 5.99345 94.6884 6.2062 94.6884 6.46587V7.98891C94.6884 8.45292 94.3274 8.81389 93.8634 8.81389H92.284C92.0147 8.81389 91.8115 9.01701 91.8115 9.28631V10.8094C91.8115 11.0787 92.0147 11.2818 92.284 11.2818H93.8634C94.3274 11.2818 94.6884 11.6427 94.6884 12.1068V13.6298C94.6884 13.8895 94.9098 14.1022 95.189 14.1022H96.7403C97.2043 14.1022 97.5652 14.4632 97.5652 14.9272V16.4502C97.5652 16.7099 97.7867 16.9227 98.0659 16.9227H99.6171C100.081 16.9227 100.442 17.2836 100.442 17.7476V19.2707C100.442 19.7347 100.081 20.0957 99.6171 20.0957H98.0377C97.5737 20.0957 97.2127 19.7347 97.2127 19.2707V17.7476C97.2127 17.4783 97.0096 17.2752 96.7403 17.2752H95.1608C94.6968 17.2752 94.3358 16.9143 94.3358 16.4502V14.9272C94.3358 14.6579 94.1327 14.4548 93.8634 14.4548H92.284C91.8199 14.4548 91.459 14.0938 91.459 13.6298V12.1068C91.459 11.8375 91.2559 11.6343 90.9866 11.6343H86.5303C86.2609 11.6343 86.0578 11.8375 86.0578 12.1068V20.0957H82.8284V12.1068C82.8284 11.6427 83.1894 11.2818 83.6534 11.2818H85.2328C85.5021 11.2818 85.7053 11.0787 85.7053 10.8094V9.28631C85.7053 9.01701 85.5021 8.81389 85.2328 8.81389H83.6534C83.1894 8.81389 82.8284 8.45292 82.8284 7.98891V0ZM42.9126 20.0957C42.4486 20.0957 42.0876 19.7347 42.0876 19.2707V17.7476C42.0876 17.4783 41.8845 17.2752 41.6152 17.2752H40.0357C39.5717 17.2752 39.2107 16.9143 39.2107 16.4502V3.64542C39.2107 3.18141 39.5717 2.82045 40.0357 2.82045H41.6152C41.8845 2.82045 42.0876 2.61732 42.0876 2.34802V0.82498C42.0876 0.360967 42.4486 0 42.9126 0H53.1226C53.5866 0 53.9476 0.360967 53.9476 0.82498V2.34802C53.9476 2.61732 54.1507 2.82045 54.42 2.82045H55.9994C56.4634 2.82045 56.8244 3.18141 56.8244 3.64542V16.4502C56.8244 16.9143 56.4634 17.2752 55.9994 17.2752H54.42C54.1507 17.2752 53.9476 17.4783 53.9476 17.7476V19.2707C53.9476 19.7347 53.5866 20.0957 53.1226 20.0957H42.9126ZM42.4401 16.4502C42.4401 16.7195 42.6433 16.9227 42.9126 16.9227H53.1226C53.3919 16.9227 53.595 16.7195 53.595 16.4502V3.64542C53.595 3.37612 53.3919 3.173 53.1226 3.173H42.9126C42.6433 3.173 42.4401 3.37612 42.4401 3.64542V16.4502Z"
          fill="white"
        />
      </svg>
    </Group>
  )
}

export const Layout = ({ children, fullWidth }: Props) => {
  return (
    <ErrorBoundary>
      <HighlightInit
        projectId={'mem28xg2'}
        tracingOrigins
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        }}
      />
      <MantineProviders>
        <Box>
          <Box
            h={94}
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #2F2F2F',
            }}
          >
            <Container
              size={'lg'}
              w={'100%'}
              px={'md'}
            >
              <Group position={'apart'}>
                <Link href={'/'}>
                  <Logo />
                </Link>
                <UserProfile />
              </Group>
            </Container>
          </Box>
          <Container
            size={fullWidth ? 'full' : 'lg'}
            px={fullWidth ? 0 : 'md'}
          >
            <Box>{children}</Box>
          </Container>
          <Footer />
        </Box>
      </MantineProviders>
    </ErrorBoundary>
  )
}
