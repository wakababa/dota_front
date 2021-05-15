import { Avatar, Card, CardContent, CardHeader, makeStyles } from '@material-ui/core'
import React from 'react'
import useSWR from 'swr'

const useStyles = makeStyles((theme) => ({
}));
const Component = ({ heros, ...props }) => {
  const classes = useStyles();
  const { data, error } = useSWR('http://localhost:8000/ability-upgrades')

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data.payload[0])
  return (
    data.payload.map((h,key) =>(
      <Card style={{margin:5}} key={key}>
      <CardHeader
        avatar={<Avatar  src={h.hero_details.imgUrl} aria-label={h.hero_details.name_english_loc}/>}
        title={h.hero_details.name_english_loc}
        subheader={`K-D-A ${h.kills}-${h.deaths}-${h.assists}`}
      />
      <CardContent>
          Detail
      </CardContent>
    </Card>
    ))
  )
}

export default Component