import { useState, useEffect } from 'react'
import { Header, Grid, Image, Segment } from 'semantic-ui-react'

const Boards = () => {

    const [boards, setBoards] = useState([]);

	const getBoardsIndex = async () => {
		try {
			const response = await fetch('http://localhost:8000/boards/');
			const data = await response.json();
			console.log(data);
			setBoards(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getBoardsIndex();
	}, []);

	if (!boards.length) {
		return <p>The quiver is empty!</p>;
	}
    
    return (
        <main>
            <Header textAlign="center" as='h1'>Boards</Header>
            <Grid>
                {
                    boards.map((board, idx) => {
                        return (
                            <Segment>
                                <Grid.Column>
                                    <Image size='medium' src={board.image_url} />
                                    <Header textAlign="center" as='h3'>{board.model}</Header>
                                    <Header textAlign="center" as='h5'>{board.brand}</Header>
                                    
                                </Grid.Column>
                            </Segment>
                        )
                    })
                }
            </Grid>
        </main>
    )
}

export default Boards