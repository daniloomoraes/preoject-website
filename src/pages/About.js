import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

import '../assets/styles/about.scss';
import img1 from '../assets/images/about/about.jpg';

const About = () => (
    <>
        <Header />
        <Container>
            <h1>About</h1>
            <img src={img1} className="img" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit non sem at rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae dolor quis augue interdum tempus. Pellentesque sodales rhoncus erat at egestas. Donec sapien purus, ullamcorper eget neque id, consectetur porttitor urna. Aenean nec ante in nunc lobortis rhoncus. Praesent ac imperdiet tellus. Nulla facilisi. Nunc sollicitudin ante leo, vel convallis odio elementum aliquet. Aenean dui lorem, egestas ac ullamcorper id, tincidunt ac sapien. Maecenas elit lorem, mollis vehicula magna in, porttitor iaculis odio. Duis posuere, tortor consectetur scelerisque fringilla, elit nisl imperdiet tellus, eget aliquam tortor leo at metus. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer blandit vitae metus nec interdum. Nullam nec quam eu arcu rutrum faucibus nec quis mi.</p>
            <p>Morbi tristique id dui eget sollicitudin. Morbi varius est at luctus scelerisque. Aenean aliquam lorem at erat ullamcorper tempor. Sed pharetra hendrerit leo eu elementum. Ut efficitur blandit metus, ac placerat nunc iaculis sed. Aliquam felis tellus, consequat eu sapien a, dapibus consectetur lorem. Suspendisse euismod tempor imperdiet. Vestibulum sed massa consequat, convallis urna ac, fermentum nunc. Nulla nec dapibus libero.</p>
            <p>Nam quis luctus tellus. Morbi feugiat pellentesque elit. Phasellus vel sapien a mauris consequat tempor in in justo. Maecenas sit amet tellus purus. Integer scelerisque, sapien vel molestie tristique, elit lectus posuere tortor, at accumsan tortor sapien a tortor. Aenean pharetra lorem vitae sodales cursus. Nulla sit amet condimentum tellus, et bibendum erat. Nullam ultricies eleifend arcu lobortis porttitor.</p>
            <p>Proin ut sapien eu libero molestie lobortis posuere ac elit. Morbi vulputate massa nulla, vitae pretium libero mollis venenatis. Nunc vulputate metus quis diam pulvinar, facilisis maximus diam accumsan. Pellentesque a diam tellus. Integer ligula nibh, dignissim et sollicitudin in, convallis quis leo. Mauris interdum ullamcorper dignissim. Fusce fermentum arcu at elit fermentum, a rutrum risus elementum. Praesent ornare sapien quis scelerisque volutpat. Phasellus vel iaculis justo. Donec blandit erat at lacus iaculis luctus vitae nec dolor. Etiam pharetra lorem eget augue posuere, sit amet luctus sem ultricies. Cras vulputate dolor eget placerat commodo. Sed sed dolor nunc. Praesent molestie pellentesque leo, id venenatis tortor semper in.</p>
            <p>Ut gravida, leo at fermentum lobortis, ante urna mollis dolor, ut aliquet urna augue a erat. In sed ligula lacinia, sollicitudin metus non, scelerisque ipsum. Suspendisse pharetra eget eros et vestibulum. Nam condimentum at felis sed ultrices. Nam ac dapibus sapien. Duis condimentum, mi in semper ornare, lorem lorem lobortis libero, eu dignissim tellus felis id orci. Phasellus at turpis lacus. Pellentesque quis diam lacus. Nullam mattis enim sapien, eget fermentum odio laoreet non.</p>
        </Container>
        <Footer />
    </>
)

export default About