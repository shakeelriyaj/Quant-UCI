import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import "./styles/members.css"
import Natanael from "./assets/Natanael.jpg"
import Ethan from "./assets/Ethanvu.jpeg"
import Shakeel from "./assets/Shakeel.jpg"
import Oliver from "./assets/Oliver.jpg"

export default function BioCard() {
  return (
    <div className="ParentBox">
        <Card
        sx={{
            width: 300,
            maxWidth: '100%',
            boxShadow: 'lg',
        }}
        >
        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Avatar src={Natanael} sx={{ '--Avatar-size': '7rem' }} />
            <Chip
            size="sm"
            variant="soft"
            color="primary"
            sx={{
                mt: -1,
                mb: 1,
                border: '3px solid',
                borderColor: 'background.surface',
            }}
            >
            Faculty Advisor
            </Chip>
            <Typography level="title-lg">Natanael Alpay</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
            PHD in Mathematics (Stochastic Equations) from the University of California, Irvine
            </Typography>
            <Box
            sx={{
                display: 'flex',
                gap: 2,
                mt: 2,
                '& > button': { borderRadius: '2rem' },
            }}
            >
            <IconButton size="sm" variant="plain" color="neutral">
                <SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <a href="https://www.linkedin.com/in/natanael-alpay-99802a19a/" target="_blank" rel="noopener noreferrer">
                        <path
                            fill="currentColor"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </a>
                </svg>
                </SvgIcon>
            </IconButton>
            </Box>
        </CardContent>
        <CardOverflow sx={{ bgcolor: 'background.level1' }}>
            <CardActions buttonFlex="1">
            <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                <Button>Message</Button>
            </ButtonGroup>
            </CardActions>
        </CardOverflow>
        </Card>
{/***************************************************************/}
        <Card
        sx={{
            width: 300,
            maxWidth: '100%',
            boxShadow: 'lg',
        }}
        >
        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Avatar src={Shakeel} sx={{ '--Avatar-size': '7rem' }} />
            <Chip
            size="sm"
            variant="soft"
            color="primary"
            sx={{
                mt: -1,
                mb: 1,
                border: '3px solid',
                borderColor: 'background.surface',
            }}
            >
            President
            </Chip>
            <Typography level="title-lg">Shakeel Riyaj</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
            Mechanical Engineering and Computer Science at University of California, Irvine
            </Typography>
            <Box
            sx={{
                display: 'flex',
                gap: 2,
                mt: 2,
                '& > button': { borderRadius: '2rem' },
            }}
            >
            <IconButton size="sm" variant="plain" color="neutral">
                <SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <a href="https://www.linkedin.com/in/shakeel-riyaj-100/" target="_blank" rel="noopener noreferrer">
                        <path
                            fill="currentColor"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </a>
                </svg>
                </SvgIcon>
            </IconButton>
            </Box>
        </CardContent>
        <CardOverflow sx={{ bgcolor: 'background.level1' }}>
            <CardActions buttonFlex="1">
            <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                <Button>Message</Button>
            </ButtonGroup>
            </CardActions>
        </CardOverflow>
        </Card>
{/***************************************************************/}
        <Card
        sx={{
            width: 300,
            maxWidth: '100%',
            boxShadow: 'lg',
        }}
        >
        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Avatar src={Ethan} sx={{ '--Avatar-size': '7rem' }} />
            <Chip
            size="sm"
            variant="soft"
            color="primary"
            sx={{
                mt: -1,
                mb: 1,
                border: '3px solid',
                borderColor: 'background.surface',
            }}
            >
            Treasurer
            </Chip>
            <Typography level="title-lg">Ethan Vu</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
            Mechanical and Biomedical Engineering at University of California, Irvine
            </Typography>
            <Box
            sx={{
                display: 'flex',
                gap: 2,
                mt: 2,
                '& > button': { borderRadius: '2rem' },
            }}
            >
            <IconButton size="sm" variant="plain" color="neutral">
                <SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <a href="https://www.linkedin.com/in/ethan-christopher-vu-622b81221/" target="_blank" rel="noopener noreferrer">
                        <path
                            fill="currentColor"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </a>
                </svg>
                </SvgIcon>
            </IconButton>
            </Box>
        </CardContent>
        <CardOverflow sx={{ bgcolor: 'background.level1' }}>
            <CardActions buttonFlex="1">
            <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                <Button>Message</Button>
            </ButtonGroup>
            </CardActions>
        </CardOverflow>
        </Card>
{/***************************************************************/}
        <Card
        sx={{
            width: 300,
            maxWidth: '100%',
            boxShadow: 'lg',
        }}
        >
        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Avatar src={Oliver} sx={{ '--Avatar-size': '7rem' }} />
            <Chip
            size="sm"
            variant="soft"
            color="primary"
            sx={{
                mt: -1,
                mb: 1,
                border: '3px solid',
                borderColor: 'background.surface',
            }}
            >
            Vice President
            </Chip>
            <Typography level="title-lg">Oliver Chu</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
            Data Science and Business at the University of California, Irvine
            </Typography>
            <Box
            sx={{
                display: 'flex',
                gap: 2,
                mt: 2,
                '& > button': { borderRadius: '2rem' },
            }}
            >
            <IconButton size="sm" variant="plain" color="neutral">
                <SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <a href="https://www.linkedin.com/in/oliver-chu/" target="_blank" rel="noopener noreferrer">
                        <path
                            fill="currentColor"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </a>
                </svg>
                </SvgIcon>
            </IconButton>
            </Box>
        </CardContent>
        <CardOverflow sx={{ bgcolor: 'background.level1' }}>
            <CardActions buttonFlex="1">
            <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                <Button>Message</Button>
            </ButtonGroup>
            </CardActions>
        </CardOverflow>
        </Card>
    </div>
  );
}