import {
  HomeIcon,
  BriefcaseIcon,
  ShieldIcon,
  CarIcon,
  TruckIcon,
  BuildingIcon,
  HardHatIcon,
  HeartIcon,
  ScaleIcon,
  ConstructionIcon,
  BabyIcon,
  BikeIcon,
  DogIcon,
  BusIcon,
  StoreIcon,
  PlaneIcon,
  ShipIcon,
  TrainIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

const PracticeAreas = () => {
  const areas = [
    {
      name: "Personal Injury",
      icon: <HomeIcon size={20} />,
      url: "/area/personal-injury",
    },
    {
      name: "Medical Malpractice",
      icon: <BriefcaseIcon size={20} />,
      url: "/area/medical-malpractice",
    },
    {
      name: "Worker's Compensation",
      icon: <ShieldIcon size={20} />,
      url: "/area/workers-compensation",
    },
    {
      name: "Car Accidents",
      icon: <CarIcon size={20} />,
      url: "/area/car-accidents",
    },
    {
      name: "Truck Accidents",
      icon: <TruckIcon size={20} />,
      url: "/area/truck-accidents",
    },
    {
      name: "Premises Liability",
      icon: <BuildingIcon size={20} />,
      url: "/area/premises-liability",
    },
    {
      name: "Construction Accidents",
      icon: <HardHatIcon size={20} />,
      url: "/area/construction-accidents",
    },
    {
      name: "Nursing Home Abuse",
      icon: <HeartIcon size={20} />,
      url: "/area/nursing-home-abuse",
    },
    {
      name: "Civil Rights",
      icon: <ScaleIcon size={20} />,
      url: "/area/civil-rights",
    },
    {
      name: "Workplace Injuries",
      icon: <ConstructionIcon size={20} />,
      url: "/area/workplace-injuries",
    },
    {
      name: "Birth Injuries",
      icon: <BabyIcon size={20} />,
      url: "/area/birth-injuries",
    },
    {
      name: "Bicycle Accidents",
      icon: <BikeIcon size={20} />,
      url: "/area/bicycle-accidents",
    },
    {
      name: "Dog Bites",
      icon: <DogIcon size={20} />,
      url: "/area/dog-bites",
    },
    {
      name: "Bus Accidents",
      icon: <BusIcon size={20} />,
      url: "/area/bus-accidents",
    },
    {
      name: "Slip and Fall",
      icon: <StoreIcon size={20} />,
      url: "/area/slip-and-fall",
    },
    {
      name: "Aviation Accidents",
      icon: <PlaneIcon size={20} />,
      url: "/area/aviation-accidents",
    },
    {
      name: "Maritime Law",
      icon: <ShipIcon size={20} />,
      url: "/area/maritime-law",
    },
    {
      name: "Train Accidents",
      icon: <TrainIcon size={20} />,
      url: "/area/train-accidents",
    },
    {
      name: "Class Action",
      icon: <UsersIcon size={20} />,
      url: "/area/class-action",
    },
  ];

  return (
    <section className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-4">Our Practice Areas</h2>
      <p className="text-center text-gray-600 mb-6">
        we know that each injury impacts lives differently and your story
        deserves to be heard. Whether your injury happened at work, on the road,
        or elsewhere, our dedicated attorneys will fight relentlessly for your
        maximum compensation. Our team has built a strong record of success
        handling
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <Link
            key={index}
            href={area.url}
            className="flex items-center p-4 border border-yellow-500 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors"
          >
            <div className="mr-2">{area.icon}</div>
            <span className="font-semibold">{area.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
