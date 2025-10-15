module ApplicationHelper
  def render_content_from(page)
    render inline: page.content, layout: false
  end

  def site_name
    "#JEANGELIQUE"
  end

  def title
    [ @page.title.presence, site_name ].uniq.compact.join(" · ")
  end

  def description
    @page.frontmatter&.dig(:description)
  end

  def author
    "JEANGELIQUE"
  end

  def canonical_url
    url_for(only_path: false)
  end

  def robots_content
    # Rails.env.production? ? "index, follow" : "noindex, nofollow"
    "noindex, nofollow"
  end

  def og_meta_tag(key, content)
    case key
    when :title, :description, :image
      tag(:meta, name: key, property: "og:#{key}", content: content)
    when :author
      tag(:meta, name: key, content: content)
    else
      tag(:meta, property: "og:#{key}", content: content)
    end
  end
end
