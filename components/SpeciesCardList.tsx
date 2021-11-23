import React, {useState} from "react";

// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Species} from '../interfaces'

export type SpeciesCardItemProps = {
    data: Species;
    onIncrease?: (id: number) => void;
    onDecrease?: () => void;
}

const SpeciesCardItem = ({ data, onIncrease }:SpeciesCardItemProps) => {

    const [displayActions, setDisplayActions] = useState<boolean>(false)

    const handleSelect = () => {
        setDisplayActions(true)
    }

    const handleIncrease = (id) => {
        console.log(id)
        onIncrease(id)
    }


    return (
        <div onClick={ handleSelect }>
            <Card sx={{ maxWidth: 500 }} >
                <CardMedia
                    component="img"
                    height="140"
                    image={data.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.taxon}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Nombre d'observation: {data.observationsCount}
                    </Typography>
                    {displayActions && (
                        <CardActions >
                            {/* <Button size="small" onClick={handleIncrease(data.id)}>Ajouter une observation</Button> */}
                            <Button size="small">Supprimer une observation</Button>
                        </CardActions>)
                    }
                </CardContent>
            </Card>
        </div>
    )
};

export default SpeciesCardItem;


