import Slider from "react-slick";

const employees = [
  {
    id: 1,
    name: "Erkin Z.",
    position: "Frontend Developer",
    imageUrl: "/images/employee1.jpg",
  },
  {
    id: 2,
    name: "Aigul S.",
    position: "Backend Developer",
    imageUrl: "/images/employee2.jpg",
  },
  {
    id: 3,
    name: "Nurlan T.",
    position: "UI/UX Designer",
    imageUrl: "/images/employee3.jpg",
  },
  // Add more employees as needed
];

export default function EmployeeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>
      <Slider {...settings}>
        {employees.map((employee) => (
          <div key={employee.id} className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={employee.imageUrl}
                alt={employee.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{employee.name}</h3>
              <p className="text-sm text-gray-600">{employee.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
