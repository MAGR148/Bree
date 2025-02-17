# frozen_string_literal: true

require 'test_helper'

class InvitationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @invitation = invitations(:one)
  end

  test 'should get index' do
    get invitations_url
    assert_response :success
  end

  test 'should get new' do
    get new_invitation_url
    assert_response :success
  end

  test 'should create invitation' do
    assert_difference('Invitation.count') do
      post invitations_url,
           params: { invitation: { city: @invitation.city, email: @invitation.email, name: @invitation.name,
                                   nutrition_professional: @invitation.nutrition_professional } }
    end

    assert_redirected_to invitation_url(Invitation.last)
  end

  test 'should show invitation' do
    get invitation_url(@invitation)
    assert_response :success
  end

  test 'should get edit' do
    get edit_invitation_url(@invitation)
    assert_response :success
  end

  test 'should update invitation' do
    patch invitation_url(@invitation),
          params: { invitation: { city: @invitation.city, email: @invitation.email, name: @invitation.name,
                                  nutrition_professional: @invitation.nutrition_professional } }
    assert_redirected_to invitation_url(@invitation)
  end

  test 'should destroy invitation' do
    assert_difference('Invitation.count', -1) do
      delete invitation_url(@invitation)
    end

    assert_redirected_to invitations_url
  end
end
