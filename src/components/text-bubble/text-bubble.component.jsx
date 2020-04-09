import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'

import './text-bubble.styles.scss'

const TextBubble = (props) => {
    if (props.info === 'sydney' ) {
            return (
                <Modal
                dialogClassName = {props.info}
                show = {!props.hidden}
                onHide = {props.onHide}
                centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Sydney
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <h4>2016 / 2017 / 2019</h4>
                    <p> 
                        Explored Sydney a few times, the city always reminds me of Auckland - having some of the most beautiful beaches in the world. I was also privilleged to take part in the Stantec "Grand Challenge" for graduates 
                        at Stantec for a weekend in Sydney
                    </p>
                    <figure className = 'bondi-beach'>
                            <img  alt = "bondi-beach" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/sydney.jpg"/>
                            <figcaption> Bondi Beach, Sydney</figcaption>
                    </figure>
                    <figure className = 'grand-challenge'>
                            <img  alt = "grand-challenge" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/grand-challenge.jpg"/>
                            <figcaption> Stantec Grand Challenge 2018</figcaption>
                    </figure>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick = {props.onHide}> Close </Button>
                    </Modal.Footer>
                </Modal>
            )
    }else if (props.info === 'melbourne' ) {
        return (
            <Modal
            dialogClassName = {props.info}
            show = {!props.hidden}
            onHide = {props.onHide}
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Melbourne
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4> 2017 </h4>
                <p>
                    Melbourne, voted one of the most livable cities in the world - truly lives up to its name. I loved my trip back in 2017 with my highschool friends. Most memorable moments were
                    finally going into a Costco, visiting the NGV (National Gallery of Victoria) and spotting penguins at night at St Kilda Pier.
                </p>
                <figure className = 'melbourne-1'>
                            <img  alt = "melbourne1" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/melbourne1.jpg"/>
                            <figcaption> Melbourne CBD</figcaption>
                    </figure>
                    <figure className = 'melbourne-2'>
                            <img  alt = "melbourne2" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/hoiserlane.jpg"/>
                            <figcaption> Hoiser Lane, Melbourne</figcaption>
                </figure>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {props.onHide}> Close </Button>
                </Modal.Footer>
            </Modal>
            )
    }else if (props.info === 'brisbane' ) {
        return (
            <Modal
            show = {!props.hidden}
            onHide = {props.onHide}
            dialogClassName = 'brisbane'
            centered
            scrollable = {true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Brisbane and The Gold coast
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4> 2016 Family Holiday</h4>
                <p> My dad and his brothers finally reunited after being seperated post Vietnam war in Australia, where we spent two weeks in Sydney and the Gold Coast / Brisbane.
                    This marked my family's first time in Australia and exploring the theme parks on the Gold Coast
                </p>
                <figure className = 'gold-coast-1'>
                            <img  alt = "gold-coast" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/gold-coast.jpg"/>
                            <figcaption> SkyPoint Observation Deck - Gold Coast </figcaption>
                </figure>
                <figure className = 'gold-coast-2'>
                            <img  alt = "gold-coast" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/gold-coast-2.jpg"/>
                            <figcaption> Universal World, Gold Coast</figcaption>
                </figure>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {props.onHide}> Close </Button>
                </Modal.Footer>
            </Modal>
        )
    }else if (props.info === 'japan' ) {
        return (
            <Modal
            show = {!props.hidden}
            onHide = {props.onHide}
            dialogClassName = 'japan'
            centered
            scrollable = {true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Japan - 2017 / 2019
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className = 'tokyo'>
                    <h4> Tokyo</h4>
                        <p> The worlds most densely populated city, Tokyo, lives up to its name. We stayed in Shibuya where the infamous Shibuya Crossing is, and by far the busiest station. The difference in culture
                            came in as a real shock to many of us (my siblings) as we learnt more about the culture, the food and the people during our 2 week stay. Akihabara is the home of japanese anime and is full of 
                            things to see and do, including the world famous Maid Cafe.
                        </p>
                        <Container fluid>
                            <Row>
                                <Col> 
                                    <figure className = 'tokyo1'>
                                        <img  alt = "tokyo1" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/tokyo1.jpg"/>
                                        <figcaption> teamLab Borderless - Digital art museum </figcaption>
                                    </figure>
                                </Col>
                                <Col> 
                                    <figure className = 'tokyo2'>
                                        <img  alt = "tokyo2" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/tokyo2.jpg"/>
                                        <figcaption> Tokyo DisneyLand </figcaption>
                                    </figure>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className = 'kyoto'>
                    <h4> Kyoto</h4>
                        <p>
                            Kyoto is widely known mainly for its shrines, temples and architecture. The city is a quiet town with plenty of things to see and do. Our AirBnB host also provided us with free tickets to a traditional
                            Japanese show. We visited the famous Fushimi-inari Shrine, Arashiyama Bamboo Forest, Kinkaku-ji (Golden shrine) and Kiyomizu-dera.  
                        </p>
                        <Container fluid>
                            <Row>
                                <Col> 
                                    <figure className = 'kyoto-1'>
                                        <img  alt = "kyoto1"  src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/kyoto1.jpg"/>
                                        <figcaption> Kiyomizu-Dera Shrine opening gates</figcaption>
                                    </figure>
                                </Col>
                                <Col> 
                                    <figure className = 'kyoto-2'>
                                        <img  alt = "kyoto2"  src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/kyoto2.jpg"/>
                                        <figcaption> Kinkaku-ji Golden Temple</figcaption>
                                    </figure>
                                </Col>
                                <Col> 
                                    <figure className = 'kyoto-3'>
                                        <img  alt = "kyoto3"  src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/kyoto3.jpg"/>
                                        <figcaption> Fushimi Inari Shrine</figcaption>
                                    </figure>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className = 'osaka'>
                    <h4> Osaka</h4>
                        <p>
                            Osaka is a coastal city, with the main shopping street of Dotonbori. Known as the nation's kitchen - Osaka is known mainly for its wide selection of foods including the home of Takoyaki, Oknomoyaki and many more.
                            The list of attractions we visited were - the Osaka Castle ( remade after the 1660s ), Osaka Aquarium Kaiyukan ( which featured a Whale-shark! ) and also tried some of the best beef in the world - Japanese Black Wagyu (Matsuyama) 
                        </p>
                        <Container fluid>
                            <Row>
                                <Col> 
                                    <figure className = 'osaka-1'>
                                        <img  alt = "osaka1" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/osaka1.jpg"/>
                                        <figcaption> View of Osaka from Udema Skydeck</figcaption>
                                    </figure>
                                </Col>
                                <Col> 
                                    <figure className = 'osaka-2'>
                                        <img  alt = "osaka2" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/osaka2.jpg"/>
                                        <figcaption> Osaka Castle</figcaption>
                                    </figure>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className = 'Nara'>
                    <h4> Nara </h4>
                        <p>
                            Nara is a small town outside of Osaka (about an hour train ride) and is most famous for the shrines and nodding deer! The deer are all wild and roam around the city freely. You are able to purchase food in which you are able to feed the deer.
                            There is a technique in feeding the deer, you place the food up high and the deer will nod three times, hide it behind your back and it will nod a further three times and then you are able to feed it!
                        </p>
                        <Container fluid>
                            <Row>
                                <Col> 
                                    <figure className = 'nara-1'>
                                        <img  alt = "nara1" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/nara1.jpg"/>
                                        <figcaption> View of Nara </figcaption>
                                    </figure>
                                </Col>
                                <Col> 
                                    <figure className = 'nara-2'>
                                        <img  alt = "nara2" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/nara2.jpg"/>
                                        <figcaption> Feeding Wild deer at Nara Park</figcaption>
                                    </figure>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {props.onHide}> Close </Button>
                </Modal.Footer>
            </Modal>
        )
    }else if (props.info === 'korea' ) {
        return (
            <Modal
            dialogClassName = {props.info}
            show = {!props.hidden}
            onHide = {props.onHide}
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        South-Korea
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4> 2017</h4>
                <p> 
                    Made a pit-stop in South-Korea while travelling through Japan and stayed in Hongdae in the capital city - Seoul. Coming from the more traditional side of Asian Culture (Japan) , South-Korea was the technology
                    powerhouse everyone knows it is. Highlights were the food, convenience of transportation and also boarding the worlds fastest elevator on the Lotte World Tower which is also the second highest 'tower' in the world.
                </p>
                <Container fluid>
                    <Row>
                        <Col>
                        <figure className = 'korea1'>
                            <img  alt = "korea-1" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/korea1.jpg"/>
                            <figcaption> Gyeongbok Palace Outpost </figcaption>
                        </figure>
                        </Col>
                        <Col>
                        <figure className = 'korea2'>
                            <img  alt = "korea-2" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/korea2.jpg"/>
                            <figcaption> World Famous - Hongdae Street Food </figcaption>
                        </figure>
                        </Col>
                        <Col>
                        <figure className = 'korea3'>
                            <img  alt = "korea-3" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/korea3.jpg"/>
                            <figcaption> Inside Lotte World Tower</figcaption>
                        </figure>
                        </Col>
                    </Row>
                </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {props.onHide}> Close </Button>
                </Modal.Footer>
            </Modal>
    )
    }else if (props.info === 'hawaii' ) {
        return (
            <Modal
            dialogClassName = {props.info}
            show = {!props.hidden}
            onHide = {props.onHide}
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Hawaii
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4> 2019 </h4>
                <p> 
                    I did a solo backpacking trip to Hawaii after my tenure at Stantec as a way to reset myself to focus on what I really wanted to do in life. I had the most amazing experiences in Hawaii including meeting people who worked at FANG,
                    Uber etc. Small world when I bumped into a few Kiwi's there, one of which went to my highschool! 
                </p>
                <Container fluid>
                    <Row>
                        <Col>
                        <figure className = 'hawaii1'>
                            <img  alt = "hawaii-1" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/hawaii1.jpg"/>
                            <figcaption> Waikiki Beachside </figcaption>
                        </figure>
                        </Col>
                        <Col>
                        <figure className = 'hawaii2'>
                            <img  alt = "hawaii-2" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/hawaii2.jpg"/>
                            <figcaption> Surfs Up! </figcaption>
                        </figure>
                        </Col>
                    </Row>
                </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {props.onHide}> Close </Button>
                </Modal.Footer>
            </Modal>
        )
    }else if (props.info === 'singapore' ) {
        return (
            <Modal
            dialogClassName = {props.info}
            show = {!props.hidden}
            onHide = {props.onHide}
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Hawaii
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4> 2017 </h4>
                <p> 
                    Singapore is an amazing place to travel to if you want a mixture of cheap food, convenience but also a super high-tech country with a strong political system. Singapore is a wealthy country with most of its money coming from its world famous 
                    airport - Changi airport which features an indoor waterfall!
                </p>
                <Container fluid>
                    <Row>
                        <Col>
                        <figure className = 'singapore1'>
                            <img  alt = "hawaii-1" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/singapore1.jpg"/>
                            <figcaption> Singapore 'Merlion' and Marina Bay Sands / Hotel </figcaption>
                        </figure>
                        </Col>
                        <Col>
                        <figure className = 'singapore2'>
                            <img  alt = "hawaii-2" src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/singapore2.jpg"/>
                            <figcaption> Universal Studios - Sentosa </figcaption>
                        </figure>
                        </Col>
                    </Row>
                </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {props.onHide}> Close </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    else {
        return (
            <Modal
            show = {props.hidden}
            />
        )
    }
}

export default TextBubble;