"use client";
import Image from "next/image";
import { Bookmark, Clock, Users, Printer, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function RecipePage() {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-slate-900">
            Mediterranean Cuisine
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Home
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Recipes
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              About
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Contact
            </a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mediterranean Grilled Vegetable & Halloumi Platter
            </h1>
            <p className="text-slate-600 mb-6">
              A vibrant, colorful dish that brings together the best flavors of
              the Mediterranean. Perfect for sharing with friends and family on
              warm summer evenings.
            </p>

            <div className="relative rounded-xl overflow-hidden mb-6">
              <Image
                src="/image.png"
                alt="Mediterranean Grilled Vegetable & Halloumi Platter"
                width={1200}
                height={600}
                className="w-full h-auto object-cover aspect-[16/9]"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                <Bookmark className="h-5 w-5 text-slate-700" />
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-slate-500 mr-2" />
                <div>
                  <p className="text-sm text-slate-500">Prep Time</p>
                  <p className="font-medium">20 mins</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-slate-500 mr-2" />
                <div>
                  <p className="text-sm text-slate-500">Cook Time</p>
                  <p className="font-medium">15 mins</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-slate-500 mr-2" />
                <div>
                  <p className="text-sm text-slate-500">Servings</p>
                  <p className="font-medium">4 people</p>
                </div>
              </div>
              <div className="flex items-center ml-auto">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <span className="ml-2 text-slate-600">(42 reviews)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => window.print()}
              >
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={async () => {
                  const recipeTitle =
                    "Mediterranean Grilled Vegetable & Halloumi Platter";
                  const recipeUrl = window.location.href;

                  if (navigator.share) {
                    try {
                      await navigator.share({
                        title: recipeTitle,
                        text: "Check out this delicious recipe!",
                        url: recipeUrl,
                      });
                    } catch (error) {
                      console.error("Error sharing:", error);
                    }
                  } else {
                    try {
                      await navigator.clipboard.writeText(recipeUrl);
                      toast({
                        title: "Link copied!",
                        description: "Recipe link copied to clipboard",
                      });
                    } catch (error) {
                      console.error("Failed to copy URL:", error);
                      prompt("Copy this link to share the recipe:", recipeUrl);
                    }
                  }
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <Tabs defaultValue="ingredients" className="mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
            </TabsList>
            <TabsContent value="ingredients" className="pt-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Checkbox id="ingredient-1" className="mt-1" />
                    <label htmlFor="ingredient-1" className="ml-3 text-base">
                      <span className="font-medium">250g halloumi cheese</span>,
                      sliced into 1cm thick pieces
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-2" className="mt-1" />
                    <label htmlFor="ingredient-2" className="ml-3 text-base">
                      <span className="font-medium">2 zucchinis</span>, sliced
                      lengthwise
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-3" className="mt-1" />
                    <label htmlFor="ingredient-3" className="ml-3 text-base">
                      <span className="font-medium">2 red bell peppers</span>,
                      deseeded and quartered
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-4" className="mt-1" />
                    <label htmlFor="ingredient-4" className="ml-3 text-base">
                      <span className="font-medium">1 eggplant</span>, sliced
                      into 1cm rounds
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-5" className="mt-1" />
                    <label htmlFor="ingredient-5" className="ml-3 text-base">
                      <span className="font-medium">1 red onion</span>, cut into
                      wedges
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-6" className="mt-1" />
                    <label htmlFor="ingredient-6" className="ml-3 text-base">
                      <span className="font-medium">200g cherry tomatoes</span>
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-7" className="mt-1" />
                    <label htmlFor="ingredient-7" className="ml-3 text-base">
                      <span className="font-medium">3 tbsp olive oil</span>
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-8" className="mt-1" />
                    <label htmlFor="ingredient-8" className="ml-3 text-base">
                      <span className="font-medium">2 cloves garlic</span>,
                      minced
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-9" className="mt-1" />
                    <label htmlFor="ingredient-9" className="ml-3 text-base">
                      <span className="font-medium">1 tbsp dried oregano</span>
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-10" className="mt-1" />
                    <label htmlFor="ingredient-10" className="ml-3 text-base">
                      <span className="font-medium">1 lemon</span>, juiced and
                      zested
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-11" className="mt-1" />
                    <label htmlFor="ingredient-11" className="ml-3 text-base">
                      <span className="font-medium">
                        Fresh mint and parsley
                      </span>
                      , chopped
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-12" className="mt-1" />
                    <label htmlFor="ingredient-12" className="ml-3 text-base">
                      <span className="font-medium">100g kalamata olives</span>
                    </label>
                  </div>
                  <div className="flex items-start">
                    <Checkbox id="ingredient-13" className="mt-1" />
                    <label htmlFor="ingredient-13" className="ml-3 text-base">
                      <span className="font-medium">Salt and pepper</span>, to
                      taste
                    </label>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="instructions" className="pt-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Instructions</h2>
                <ol className="space-y-6 list-decimal list-inside">
                  <li className="pl-2">
                    <p className="inline font-medium text-slate-900">
                      Prepare the marinade.
                    </p>
                    <p className="mt-2 text-slate-700">
                      In a small bowl, mix together the olive oil, minced
                      garlic, dried oregano, lemon zest, half the lemon juice,
                      salt, and pepper.
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="inline font-medium text-slate-900">
                      Prepare the vegetables.
                    </p>
                    <p className="mt-2 text-slate-700">
                      Place the zucchini, bell peppers, eggplant, and red onion
                      in a large bowl. Pour two-thirds of the marinade over the
                      vegetables and toss to coat evenly. Let them marinate for
                      at least 15 minutes.
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="inline font-medium text-slate-900">
                      Prepare the halloumi.
                    </p>
                    <p className="mt-2 text-slate-700">
                      Brush the halloumi slices with the remaining marinade and
                      set aside.
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="inline font-medium text-slate-900">
                      Preheat the grill.
                    </p>
                    <p className="mt-2 text-slate-700">
                      Heat a grill pan or outdoor grill to medium-high heat.
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="inline font-medium text-slate-900">
                      Grill the vegetables.
                    </p>
                    <p className="mt-2 text-slate-700">
                      Grill the vegetables in batches, turning occasionally,
                      until they are tender and have nice grill marks. The
                      zucchini and eggplant will take about 3-4 minutes per
                      side, while the bell peppers and onions might take a bit
                      longer.
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="inline font-medium text-slate-900">
                      Grill the halloumi.
                    </p>
                    <p className="mt-2 text-slate-700">
                      Grill the halloumi for about 2 minutes on each side, until
                      golden and slightly soft.
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="inline font-medium text-slate-900">
                      Assemble the platter.
                    </p>
                    <p className="mt-2 text-slate-700">
                      Arrange the grilled vegetables and halloumi on a large
                      serving platter. Scatter the cherry tomatoes and kalamata
                      olives around.
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="inline font-medium text-slate-900">
                      Add the finishing touches.
                    </p>
                    <p className="mt-2 text-slate-700">
                      Drizzle with the remaining lemon juice and a little extra
                      olive oil. Sprinkle with the chopped fresh herbs.
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="inline font-medium text-slate-900">
                      Serve and enjoy!
                    </p>
                    <p className="mt-2 text-slate-700">
                      Serve warm or at room temperature with crusty bread on the
                      side.
                    </p>
                  </li>
                </ol>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-white rounded-xl p-6 shadow-sm mb-12">
            <h2 className="text-xl font-semibold mb-4">Chef's Notes</h2>
            <div className="prose prose-slate max-w-none">
              <p>
                This Mediterranean platter is incredibly versatile. You can add
                or substitute vegetables based on what's in season or your
                personal preferences. Asparagus, mushrooms, or artichoke hearts
                would all be delicious additions.
              </p>
              <p>
                For a complete meal, serve with warm pita bread, hummus, or
                tzatziki on the side. A simple green salad with a lemon
                vinaigrette would also complement this dish beautifully.
              </p>
              <p>
                Leftovers can be stored in an airtight container in the
                refrigerator for up to 3 days. They're delicious cold or at room
                temperature, making this a perfect make-ahead dish for
                entertaining.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Nutrition Information
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-sm text-slate-500">Calories</p>
                <p className="text-xl font-semibold">320</p>
                <p className="text-xs text-slate-500">kcal</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-sm text-slate-500">Protein</p>
                <p className="text-xl font-semibold">15g</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-sm text-slate-500">Carbs</p>
                <p className="text-xl font-semibold">18g</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-sm text-slate-500">Fat</p>
                <p className="text-xl font-semibold">22g</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Mediterranean Cuisine
              </h3>
              <p className="text-slate-300">
                Bringing the flavors of the Mediterranean to your kitchen with
                simple, delicious recipes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Meal Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cooking Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-slate-300 mb-4">
                Get weekly recipes delivered to your inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-slate-900"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <div className="text-center text-slate-400 text-sm">
            <p>
              © {new Date().getFullYear()} Mediterranean Cuisine. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
