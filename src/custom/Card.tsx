// import { CircleDollar } from "@gravity-ui/icons";
import { Card } from "@heroui/react";
import Link from "next/link";

function CustomCard({
  cardTitle,
  cardDescription,
  cardFooter,
  cardLink,
  className,
}: {
  cardTitle: string;
  cardDescription: number | string;
  cardFooter: string;
  cardLink: string;
  className?: string;
}) {
  return (
    <Card className={` ${className} rounded-lg `}>
      <Card.Header>
        <Card.Title className="text-2xl text-white leading-relaxed text-center">
          {cardTitle}
        </Card.Title>
        <div className="flex justify-center items-center mt-4">
          <Card.Description className="text-gray-400 text-md flex flex-col justify-center items-center">
            count of {cardTitle}{" "}
            <span className="w-10 h-10 rounded-full mt-3 text-gray-300/60 font-semibold bg-sky-500/50 text-xl flex justify-center items-center">
              {cardDescription}
            </span>
          </Card.Description>
        </div>
      </Card.Header>
      <Card.Footer className="flex-1">
        <Link
          aria-label={`Go to ${cardTitle}`}
          title={`Go to ${cardTitle}`}
          href={cardLink}
          rel="noopener noreferrer"
          className="text-center text-sm block border-none underline w-full text-white"
        >
          {cardFooter}
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default CustomCard;
