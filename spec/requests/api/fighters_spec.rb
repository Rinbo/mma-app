require 'rails_helper'

RSpec.describe 'Fighter creation', type: :request do
  let(:headers) { { HTTP_ACCEPT: 'application/json' } }

  context 'with valid information' do
    it 'creates a fighter in database' do
      post '/api/v1/fighters', params: {fighter: {name: 'Jon Jones',
                                 description: 'No losses' }                                 
                              }, headers: headers
      entry = Fighter.last
      expect(entry.name).to eq 'Jon Jones'      
    end
  end
end