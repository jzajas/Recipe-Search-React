

export default function CardRecipe({ id, title, image }) {

    return(
        <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          onClick={() =>
            window.open(`https://spoonacular.com/recipes/${id}`, "_blank")
          }
        >
          View Recipe
        </Button>
      </CardFooter>
    </Card>
    );
}