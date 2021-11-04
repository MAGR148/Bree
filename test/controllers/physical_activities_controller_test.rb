require "test_helper"

class PhysicalActivitiesControllerTest < ActionDispatch::IntegrationTest
  def should_get_index
    get physical_activities_index_url
    assert_response :success
  end
end
