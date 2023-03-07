const Content = (props) => {
  const exercises = props.content.map(content => content.exercises);
  const total = exercises.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <div>
      {props.content.map(content => <p key={content.id}>{content.name}: {content.exercises}</p>)}
      <p><b>There's a total of {total} exercises.</b></p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      {props.header.map(header =>
        <div key={header.id}>
          <h2>{header.name}</h2>
          <Content content={header.parts}/>
        </div>
      )}
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header header={props.course.map(course => course)}/>
    </div>
  )
}

export default Course;