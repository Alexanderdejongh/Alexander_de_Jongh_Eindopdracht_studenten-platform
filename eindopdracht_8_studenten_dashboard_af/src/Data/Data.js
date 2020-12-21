import React, { createContext, useState } from 'react'

import Aranka from '../Pics/Aranka.jpg'
import Evelyn from '../Pics/Evelyn.jpg'
import Floris from '../Pics/Floris.jpg'
import Hector from '../Pics/Hector.jpg'
import Martina from '../Pics/Martina.jpg'
import Maurits from '../Pics/Maurits.jpg'
import Rahima from '../Pics/Rahima.jpg'
import Sandra from '../Pics/Sandra.jpg'
import Storm from '../Pics/Storm.jpg'
import Wietske from '../Pics/Wietske.jpg'


const data = [{
        name: "Evelyn",
        opdracht: "SCRUM",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W1D1-1",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W1D2-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W1D2-2",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W1D2-3",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W1D2-4",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W1D2-5",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W1D3-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W1D3-2",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W1D3-4",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W1D3-5",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W1D3 - Project - Guess-the-number",
        Moeilijkheid: "5",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W1D4-1",
        Moeilijkheid: "4",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W1D4 - Project - Kleurentoggle",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W1D5 - Project - Galgje",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W2D1-1",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W2D1-2",
        Moeilijkheid: "2",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W2D2-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W2D2-2",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W2D2-3",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W2D3-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W2D3-2",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W2D3-3",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W2D4-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W2D4-2",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W2D4-3",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W2D5 - Project - Filmzoeker",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W3D1-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W3D1-2",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W3D1-3",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W3D1-4",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W3D2-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W3D2-2",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W3D2-3",
        Moeilijkheid: "3",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W3D3-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W3D3-2",
        Moeilijkheid: "4",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W3D3-3",
        Moeilijkheid: "3",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W3D3-4",
        Moeilijkheid: "4",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W3D4-1",
        Moeilijkheid: "5",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W3D4-2",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W3D5 - Project - Todo-List",
        Moeilijkheid: "2",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W4D2-1",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W4D2-2",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W4D2-3",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W4D2-4",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W4D3-1",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W4D3-2",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W4D3-3",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W4D3-4",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W4D3-5",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W4D3 - Project - Next-Level CSS",
        Moeilijkheid: "1",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W5D4-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Evelyn",
        opdracht: "W5D5 - Project - Lil_Playlist",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W6D1-1",
        Moeilijkheid: "5",
        leuk: "5"
    },
    {
        name: "Evelyn",
        opdracht: "W6D2-1",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Evelyn",
        opdracht: "W6D2 - Project - Eindopdracht",
        Moeilijkheid: "5",
        leuk: "5"
    },
    {
        name: "Aranka",
        opdracht: "SCRUM",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W1D1-1",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W1D2-1",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W1D2-2",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W1D2-3",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W1D2-4",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W1D2-5",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W1D3-1",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W1D3-2",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W1D3-4",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W1D3-5",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W1D3 - Project - Guess-the-number",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W1D4-1",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W1D4 - Project - Kleurentoggle",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W1D5 - Project - Galgje",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W2D1-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Aranka",
        opdracht: "W2D1-2",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Aranka",
        opdracht: "W2D2-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Aranka",
        opdracht: "W2D2-2",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Aranka",
        opdracht: "W2D2-3",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Aranka",
        opdracht: "W2D3-1",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W2D3-2",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W2D3-3",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W2D4-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Aranka",
        opdracht: "W2D4-2",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W2D4-3",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W2D5 - Project - Filmzoeker",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W3D1-1",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W3D1-2",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W3D1-3",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Aranka",
        opdracht: "W3D1-4",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W3D2-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W3D2-2",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W3D2-3",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W3D3-1",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W3D3-2",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W3D3-3",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W3D3-4",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W3D4-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W3D4-2",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W3D5 - Project - Todo-List",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W4D2-1",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W4D2-2",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W4D2-3",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W4D2-4",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Aranka",
        opdracht: "W4D3-1",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W4D3-2",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Aranka",
        opdracht: "W4D3-3",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W4D3-4",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W4D3-5",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W4D3 - Project - Next-Level CSS",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Aranka",
        opdracht: "W5D4-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Aranka",
        opdracht: "W5D5 - Project - Lil_Playlist",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W6D1-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Aranka",
        opdracht: "W6D2-1",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Aranka",
        opdracht: "W6D2 - Project - Eindopdracht",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "SCRUM",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W1D1-1",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W1D2-1",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W1D2-2",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W1D2-3",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W1D2-4",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W1D2-5",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W1D3-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W1D3-2",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W1D3-4",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W1D3-5",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W1D3 - Project - Guess-the-number",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W1D4-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W1D4 - Project - Kleurentoggle",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W1D5 - Project - Galgje",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W2D1-1",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W2D1-2",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W2D2-1",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W2D2-2",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W2D2-3",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W2D3-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W2D3-2",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W2D3-3",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W2D4-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W2D4-2",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W2D4-3",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W2D5 - Project - Filmzoeker",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W3D1-1",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W3D1-2",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W3D1-3",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W3D1-4",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W3D2-1",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W3D2-2",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W3D2-3",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W3D3-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W3D3-2",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W3D3-3",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W3D3-4",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W3D4-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W3D4-2",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W3D5 - Project - Todo-List",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W4D2-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W4D2-2",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W4D2-3",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W4D2-4",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W4D3-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W4D3-2",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Floris",
        opdracht: "W4D3-3",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W4D3-4",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W4D3-5",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W4D3 - Project - Next-Level CSS",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W5D4-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Floris",
        opdracht: "W5D5 - Project - Lil_Playlist",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W6D1-1",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Floris",
        opdracht: "W6D2-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Floris",
        opdracht: "W6D2 - Project - Eindopdracht",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "SCRUM",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W1D1-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W1D2-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W1D2-2",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W1D2-3",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W1D2-4",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W1D2-5",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W1D3-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W1D3-2",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W1D3-4",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W1D3-5",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W1D3 - Project - Guess-the-number",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W1D4-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W1D4 - Project - Kleurentoggle",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W1D5 - Project - Galgje",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W2D1-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W2D1-2",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W2D2-1",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W2D2-2",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W2D2-3",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W2D3-1",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W2D3-2",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W2D3-3",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W2D4-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W2D4-2",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W2D4-3",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W2D5 - Project - Filmzoeker",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W3D1-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W3D1-2",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W3D1-3",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W3D1-4",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W3D2-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W3D2-2",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W3D2-3",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W3D3-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W3D3-2",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W3D3-3",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W3D3-4",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W3D4-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W3D4-2",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W3D5 - Project - Todo-List",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W4D2-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W4D2-2",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W4D2-3",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W4D2-4",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W4D3-1",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W4D3-2",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W4D3-3",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W4D3-4",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Hector",
        opdracht: "W4D3-5",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W4D3 - Project - Next-Level CSS",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W5D4-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Hector",
        opdracht: "W5D5 - Project - Lil_Playlist",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W6D1-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Hector",
        opdracht: "W6D2-1",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Hector",
        opdracht: "W6D2 - Project - Eindopdracht",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "SCRUM",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W1D1-1",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W1D2-1",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Martina",
        opdracht: "W1D2-2",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W1D2-3",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W1D2-4",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Martina",
        opdracht: "W1D2-5",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W1D3-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W1D3-2",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W1D3-4",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Martina",
        opdracht: "W1D3-5",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W1D3 - Project - Guess-the-number",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Martina",
        opdracht: "W1D4-1",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Martina",
        opdracht: "W1D4 - Project - Kleurentoggle",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Martina",
        opdracht: "W1D5 - Project - Galgje",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W2D1-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W2D1-2",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Martina",
        opdracht: "W2D2-1",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W2D2-2",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Martina",
        opdracht: "W2D2-3",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W2D3-1",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Martina",
        opdracht: "W2D3-2",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W2D3-3",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Martina",
        opdracht: "W2D4-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W2D4-2",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W2D4-3",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W2D5 - Project - Filmzoeker",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W3D1-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W3D1-2",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Martina",
        opdracht: "W3D1-3",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W3D1-4",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Martina",
        opdracht: "W3D2-1",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Martina",
        opdracht: "W3D2-2",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W3D2-3",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W3D3-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W3D3-2",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W3D3-3",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Martina",
        opdracht: "W3D3-4",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Martina",
        opdracht: "W3D4-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W3D4-2",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W3D5 - Project - Todo-List",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Martina",
        opdracht: "W4D2-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W4D2-2",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Martina",
        opdracht: "W4D2-3",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W4D2-4",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W4D3-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W4D3-2",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Martina",
        opdracht: "W4D3-3",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W4D3-4",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W4D3-5",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Martina",
        opdracht: "W4D3 - Project - Next-Level CSS",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W5D4-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W5D5 - Project - Lil_Playlist",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W6D1-1",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Martina",
        opdracht: "W6D2-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Martina",
        opdracht: "W6D2 - Project - Eindopdracht",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "SCRUM",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W1D1-1",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W1D2-1",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W1D2-2",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W1D2-3",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W1D2-4",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W1D2-5",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W1D3-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W1D3-2",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W1D3-4",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W1D3-5",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W1D3 - Project - Guess-the-number",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W1D4-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W1D4 - Project - Kleurentoggle",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W1D5 - Project - Galgje",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W2D1-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W2D1-2",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W2D2-1",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W2D2-2",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W2D2-3",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W2D3-1",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W2D3-2",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W2D3-3",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W2D4-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W2D4-2",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W2D4-3",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W2D5 - Project - Filmzoeker",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W3D1-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W3D1-2",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W3D1-3",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W3D1-4",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W3D2-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W3D2-2",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W3D2-3",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W3D3-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W3D3-2",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W3D3-3",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W3D3-4",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W3D4-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W3D4-2",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W3D5 - Project - Todo-List",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W4D2-1",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W4D2-2",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W4D2-3",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W4D2-4",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W4D3-1",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W4D3-2",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W4D3-3",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W4D3-4",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W4D3-5",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Maurits",
        opdracht: "W4D3 - Project - Next-Level CSS",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W5D4-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W5D5 - Project - Lil_Playlist",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Maurits",
        opdracht: "W6D1-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Maurits",
        opdracht: "W6D2-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Maurits",
        opdracht: "W6D2 - Project - Eindopdracht",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "SCRUM",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W1D1-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W1D2-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W1D2-2",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W1D2-3",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W1D2-4",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W1D2-5",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W1D3-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W1D3-2",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W1D3-4",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W1D3-5",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W1D3 - Project - Guess-the-number",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W1D4-1",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W1D4 - Project - Kleurentoggle",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W1D5 - Project - Galgje",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W2D1-1",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W2D1-2",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W2D2-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W2D2-2",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W2D2-3",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W2D3-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W2D3-2",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W2D3-3",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W2D4-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W2D4-2",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W2D4-3",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W2D5 - Project - Filmzoeker",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W3D1-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W3D1-2",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W3D1-3",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W3D1-4",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W3D2-1",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W3D2-2",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W3D2-3",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W3D3-1",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W3D3-2",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W3D3-3",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W3D3-4",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W3D4-1",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W3D4-2",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W3D5 - Project - Todo-List",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W4D2-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W4D2-2",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W4D2-3",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W4D2-4",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W4D3-1",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W4D3-2",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W4D3-3",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Rahima",
        opdracht: "W4D3-4",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W4D3-5",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W4D3 - Project - Next-Level CSS",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Rahima",
        opdracht: "W5D4-1",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W5D5 - Project - Lil_Playlist",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Rahima",
        opdracht: "W6D1-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W6D2-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Rahima",
        opdracht: "W6D2 - Project - Eindopdracht",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Sandra",
        opdracht: "SCRUM",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Sandra",
        opdracht: "W1D1-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W1D2-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W1D2-2",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W1D2-3",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W1D2-4",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Sandra",
        opdracht: "W1D2-5",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W1D3-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Sandra",
        opdracht: "W1D3-2",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Sandra",
        opdracht: "W1D3-4",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W1D3-5",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W1D3 - Project - Guess-the-number",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W1D4-1",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W1D4 - Project - Kleurentoggle",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W1D5 - Project - Galgje",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W2D1-1",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Sandra",
        opdracht: "W2D1-2",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W2D2-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W2D2-2",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W2D2-3",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W2D3-1",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W2D3-2",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W2D3-3",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W2D4-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W2D4-2",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W2D4-3",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W2D5 - Project - Filmzoeker",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W3D1-1",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W3D1-2",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W3D1-3",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W3D1-4",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W3D2-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W3D2-2",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W3D2-3",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W3D3-1",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W3D3-2",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W3D3-3",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W3D3-4",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W3D4-1",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W3D4-2",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Sandra",
        opdracht: "W3D5 - Project - Todo-List",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W4D2-1",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W4D2-2",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Sandra",
        opdracht: "W4D2-3",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W4D2-4",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W4D3-1",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Sandra",
        opdracht: "W4D3-2",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W4D3-3",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W4D3-4",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W4D3-5",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W4D3 - Project - Next-Level CSS",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W5D4-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Sandra",
        opdracht: "W5D5 - Project - Lil_Playlist",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Sandra",
        opdracht: "W6D1-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Sandra",
        opdracht: "W6D2-1",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Sandra",
        opdracht: "W6D2 - Project - Eindopdracht",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "SCRUM",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W1D1-1",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W1D2-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W1D2-2",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W1D2-3",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W1D2-4",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W1D2-5",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W1D3-1",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W1D3-2",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W1D3-4",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W1D3-5",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W1D3 - Project - Guess-the-number",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W1D4-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W1D4 - Project - Kleurentoggle",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W1D5 - Project - Galgje",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W2D1-1",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W2D1-2",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W2D2-1",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W2D2-2",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W2D2-3",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W2D3-1",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W2D3-2",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W2D3-3",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W2D4-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W2D4-2",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W2D4-3",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W2D5 - Project - Filmzoeker",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W3D1-1",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W3D1-2",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W3D1-3",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W3D1-4",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W3D2-1",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W3D2-2",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W3D2-3",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W3D3-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W3D3-2",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W3D3-3",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W3D3-4",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W3D4-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W3D4-2",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W3D5 - Project - Todo-List",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W4D2-1",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W4D2-2",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W4D2-3",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W4D2-4",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W4D3-1",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W4D3-2",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W4D3-3",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W4D3-4",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Wietske",
        opdracht: "W4D3-5",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Wietske",
        opdracht: "W4D3 - Project - Next-Level CSS",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W5D4-1",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W5D5 - Project - Lil_Playlist",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Wietske",
        opdracht: "W6D1-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W6D2-1",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Wietske",
        opdracht: "W6D2 - Project - Eindopdracht",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "SCRUM",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W1D1-1",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W1D2-1",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W1D2-2",
        Moeilijkheid: "1",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W1D2-3",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W1D2-4",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W1D2-5",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W1D3-1",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W1D3-2",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W1D3-4",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W1D3-5",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W1D3 - Project - Guess-the-number",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W1D4-1",
        Moeilijkheid: "4",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W1D4 - Project - Kleurentoggle",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W1D5 - Project - Galgje",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W2D1-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W2D1-2",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W2D2-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W2D2-2",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W2D2-3",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W2D3-1",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W2D3-2",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W2D3-3",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W2D4-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W2D4-2",
        Moeilijkheid: "4",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W2D4-3",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W2D5 - Project - Filmzoeker",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W3D1-1",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W3D1-2",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W3D1-3",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W3D1-4",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W3D2-1",
        Moeilijkheid: "1",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W3D2-2",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W3D2-3",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W3D3-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W3D3-2",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W3D3-3",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W3D3-4",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W3D4-1",
        Moeilijkheid: "2",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W3D4-2",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W3D5 - Project - Todo-List",
        Moeilijkheid: "3",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W4D2-1",
        Moeilijkheid: "2",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W4D2-2",
        Moeilijkheid: "3",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W4D2-3",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W4D2-4",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W4D3-1",
        Moeilijkheid: "3",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W4D3-2",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W4D3-3",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W4D3-4",
        Moeilijkheid: "3",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W4D3-5",
        Moeilijkheid: "2",
        leuk: "3"
    },
    {
        name: "Storm",
        opdracht: "W4D3 - Project - Next-Level CSS",
        Moeilijkheid: "4",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W5D4-1",
        Moeilijkheid: "2",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W5D5 - Project - Lil_Playlist",
        Moeilijkheid: "1",
        leuk: "2"
    },
    {
        name: "Storm",
        opdracht: "W6D1-1",
        Moeilijkheid: "4",
        leuk: "4"
    },
    {
        name: "Storm",
        opdracht: "W6D2-1",
        Moeilijkheid: "1",
        leuk: "1"
    },
    {
        name: "Storm",
        opdracht: "W6D2 - Project - Eindopdracht",
        Moeilijkheid: "3",
        leuk: "3"
    }
]

// krijg alle namen
const personsInData = data.map(item => item.name)
const uniqueNames = Array.from(new Set(personsInData))

// krijg alle opdrachten
const opdrachtInData = data.map(item => item.opdracht)
const uniqueOpdracht = new Set(opdrachtInData)
const schoolOpdrachten = Array.from(uniqueOpdracht)

// krijg alle moeilijkheid van opdrachten
const MoeilijkheidInData = data.map(item => item.Moeilijkheid)
const moeilijkheidDataopsplitser = () => {
    const opgesplitsteMoeilijkheidData = []
    for (let i = 1; i <= 10; i++) {
        opgesplitsteMoeilijkheidData.push(MoeilijkheidInData.splice(0, 56))
    }
    return opgesplitsteMoeilijkheidData
}
const arrOfMoeilijk = moeilijkheidDataopsplitser();

// krijg alle leukheid van opdrachten
const leukInData = data.map(item => item.leuk)
const leukheidDataopsplitser = () => {
    const opgesplitsteleukheidData = []
    for (let i = 1; i <= 10; i++) {
        opgesplitsteleukheidData.push(leukInData.splice(0, 56))
    }
    return opgesplitsteleukheidData
}
const arrOfLeuk = leukheidDataopsplitser();

//______________________________________________________________________________________________________________________________
// Concatinating moeilijk en leuk:
const eachSchoolOpdracht = schoolOpdrachten.map(item => item)
const createDataPerPerson = [];


for (var i = 0; i < 10; i++) {
    const eachcijferinLeuk = arrOfLeuk[i]
    const eachcijferinMoeilijk = arrOfMoeilijk[i]
    const eachName = uniqueNames[i]
    const eachcijferinLeukArr = []
    const eachcijferinMoeilijkArr = []
    for (var e = 0; e < 56; e++) {
        eachcijferinLeukArr.push(eachcijferinLeuk[e])
        eachcijferinMoeilijkArr.push(eachcijferinMoeilijk[e])
    }
    createDataPerPerson.push({
        name: eachName,
        opdracht: { SchoolOpdracht: eachSchoolOpdracht, leuk: eachcijferinLeukArr, moeilijk: eachcijferinMoeilijkArr, }
    })
}

const fotoVanStudenten = [Aranka, Evelyn, Floris, Hector, Martina, Maurits, Rahima, Sandra, Storm, Wietske]

const createDataPerPersonOrginized = [];


createDataPerPerson.map((item, index) => {
    // maak je code leesbaar
    const name = item.name
    const leuk = item.opdracht.leuk.map(item => item)
    const moeilijk = item.opdracht.moeilijk.map(item => item)
    const opdracht = item.opdracht.SchoolOpdracht
        // console.log(leuk, moeilijk)
    const getOpdrachtenLeukMoeilijk = []
    createDataPerPersonOrginized.push({ name: name, opdrachten: getOpdrachtenLeukMoeilijk })
    for (var i = 0; i < 56; i++) {
        const eachopdracht = opdracht[i]
        const eachcijferinLeukArr = leuk[i]
        const eachcijferinMoeilijkArr = moeilijk[i]
        getOpdrachtenLeukMoeilijk.push({ opdracht: eachopdracht, Leuk: eachcijferinLeukArr, moeilijk: eachcijferinMoeilijkArr })
    }
})

// Voeg de Foto's toe (dit had ik veel eerder kunnen doen, zodat het minder complex zou worden, maar ik had dit idee pas later)
// 

const personalStories = [
    `I love this training in Web-Development! i've learned a lot!
    i have done the Front-end! and I want to bring the things i've learned to a professional job!
    Maybe in the future i do the Back-end part!
    ! really enjoyed the training and i recommend it to everybody!` ,
    `I've learned a lot in this training in Web-Development!
    I want to take it to the next level and learn the Back-end part!
    I really enjoyed the training and i am looking forward to learn the Back-End` ,
    `The things i've learned in this training in Web-Development are amazing! 
    I have done the Front-end webdevelopment because i really like creating things! 
    I recommend the training the to everybody, it had a lot of content to learn! ` ,
    `Web-Development is something everybody can learn!
    I enjoyed the way they teach us the language, and all the things you need to know in you proffesional work!
    I really enjoyed the training and i thinking about learning the Back-End` ,
    `I've learned a lot! this training opened a whole new world!
    I have finished the Front-end and searching for a job!
    Maybe I want to learn Python or Java!
    I really enjoyed the training and i recommend it to everybody join this training!` ,
    `I've done a lote of training in Web-Development but in this training i've learned a lot!
    This whas the most whole experience i've had so far!
    Maybe in the future i do the Back-end part on this platform!
    i recommend it to everybody that want to learn something new!` ,
    `I've learned a lot in this training in Web-Development and really like coding!
    Coding is a way of expressing your fantasy world in the real world.
    It's very similar to music in some way, in stead of listening to someone else his fantasie you watch!
    I really enjoyed the training, and if you are interested in creating things this might be your new dream!` ,
    `This training in Web-Development is very well! i've learned a lot of new stuff!
    I've done training somewhere else but it wasn't that complete like this training!
    I will try the back-End aswell! I would love to know the whole picture!
    I recommend this training to everybody that want to expand their borders!` ,
    `This training in Web-Development is really good for beginners like me!
    I wanted to learn something new and came across this training and loved it!
    I've learned that programming is a mindset and a scill, i realy love that!
    I really enjoyed the training and i recommend everyone that want to learn some new skills` ,
    `When i strarded this training in Web-Development i didn't had the feeling right away!
    But i dont like giving up, so i continued the program, and i am happy with that choice!
    Because when the part of JS came a new world of possibilities opened!
    So my advice to all the people that start the training, hold on, it gets fun!
    i really enjoyed the training and i recommend it to everybody!` ,

]

const createDataPerPersonOrginizedWithPicture = [];

for (var i = 0; i < 10; i++) {
    const addPicture = fotoVanStudenten[i]
    const getDataName = createDataPerPersonOrginized.map(item => item.name)
    const addDataName = getDataName[i]
    const getDataOpdracten = createDataPerPersonOrginized.map(item => item.opdrachten)
    const addDataOpdracten = getDataOpdracten[i]
    const addStory = personalStories[i]
    createDataPerPersonOrginizedWithPicture.push({ id: i, name: addDataName, picture: addPicture, opdrachten: addDataOpdracten, story: addStory, check: false, })
}

// Create content for the whole app
export const dataContext = createContext();

export function DataProvider(props) {
    const [studentData, setStudentData] = useState(createDataPerPersonOrginizedWithPicture)
    return ( <dataContext.Provider value = {[studentData, setStudentData]}> 
    { props.children } 
        </dataContext.Provider>
    )
}