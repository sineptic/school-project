import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "next/dist/build/templates/pages";

class FoodInfo {
  name: string;
  composition: Array<string>;
  mass: number;
  cost: number;

  constructor(
    name: string,
    composition: Array<string>,
    mass: number,
    cost: number,
  ) {
    this.name = name;
    this.composition = composition;
    this.mass = mass;
    this.cost = cost;
  }
}

const FoodItem = ({ info }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="scroll-m-20 text-lg tracking-tight">
          {info.name}
          <div className="inline pl-2 text-sm font-medium leading-none">
            {info.mass} {"г"}
          </div>
        </div>
        <div className="text-muted-foreground">
          {info.composition.join(", ")}
        </div>
      </div>
      <div className="pl-16 float-right flex place-self-center">
        <div className="pr-4">{info.cost} руб.</div>
        SOMEBUTTON
      </div>
    </div>
  );
};

const DayItem = ({
  day_number,
  infos,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="rounded-lg p-4 m-2 border w-full">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-2">
        {" "}
        Day {day_number}
      </h3>
      <ul>
        {infos.map((value: FoodInfo) => (
          <li key={undefined} className="p-1">
            <FoodItem info={value} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const food = [
  [
    new FoodInfo(
      "Салат Греческий с брынзой",
      ["помидоры", "огурцы", "перец сладкий", "сыр"],
      120,
      110,
    ),
    new FoodInfo(
      "Салат Фреш",
      ["помидоры", "огурцы", "салат айсберг", "оливки"],
      120,
      65,
    ),
  ],
  [
    new FoodInfo(
      "Борщ Московский",
      [
        "говядина лопаточная часть",
        "свекла",
        "капуста б/к",
        "картофель",
        "лук репчатый",
        " фасоль",
        "томат-паста",
        "масло растительное",
        "соль",
        "чеснок",
        "сахар",
        "сметана",
        "кислота лимонная",
      ],
      200,
      95,
    ),
  ],
];

// TODO: add hover functionality

export default function Home() {
  return (
    <div className="w-fit">
      <DayItem day_number={1} infos={food[0]} />
      <DayItem day_number={2} infos={food[1]} />
    </div>
  );
}
