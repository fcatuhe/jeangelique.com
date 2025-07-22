class Data::Gallery
  include ActiveModel::Model

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def self.find(name)
    new(name)
  end

  def photos
    @photos ||= format_photos
  end


  private
    def data
      @data ||= begin
        YAML.load_file(data_file_path, symbolize_names: true) || {}
      rescue Errno::ENOENT
        Rails.logger.warn "Data file not found: #{data_file_path}"
        {}
      end
    end

    def data_file_path
      path = self.class.name.underscore
      Rails.root.join(path, "#{name}.yml")
    end

    def format_photos
      (data[:photos] || []).map do |photo|
        {
          src: photo[:src],
          srcSet: photo[:srcSet],
          width: photo[:width],
          height: photo[:height]
        }
      end
    end
end
