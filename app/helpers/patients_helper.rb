module PatientsHelper

  def calculate_harris_percentage(patient)
    calculate_harris(patient) / 100 * 10
  end

  def calculate_harris(patient)
    return calculate_harris_for_male(patient) if patient.is_male?

    calculate_harris_for_female(patient)
  end

  def calculate_harris_for_male(patient)
    66.473 + (13.752 * patient.weight) + (5.003 * patient.height) - (6.775 * patient.age)
  end

  def calculate_harris_for_female(patient)
    655.096 + (9.563 * patient.weight) + (1.850 * patient.height) - (4.676 * patient.age)
  end
end
