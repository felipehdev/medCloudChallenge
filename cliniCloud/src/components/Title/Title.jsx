import React from 'react'
import Typography from '@mui/material/Typography';
import S from './Title.module.css'

const Title = () => {
  return (
    <Typography className={S.typho} variant="h2" component="h1">
    <div className={S.h1}>CliniCloud</div>
    </Typography>
  )
}

export default Title