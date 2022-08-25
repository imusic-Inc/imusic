function PublicSession() {
    
    return (
        <>
            <h3 id="trending" class="pt-4">popular sessions</h3>
          <div class="flex-row p-session">
              {genre.map(value => {
                  return <Session name={value.name} image={value.icons[0].url} key={value.id} />
              })}
            </div>
        </>
    )
}