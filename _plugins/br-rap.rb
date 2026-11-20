require "cgi"

module Jekyll
    module BrazillianRapFilters
        def format_artists(artists)
            # Dado uma lista de strings, devolve uma string contento cada um dentro de uma tag <u> separados por vírgula
            # Se e somente se a lista ser igual a ["(Vários Interpretes)"] pois nesse caso não deixamos sublinhado

            if artists == ["(Vários Interpretes)"]
                "(Vários Interpretes)"
            else
                artists.map { |artist| "<u>#{CGI.escapeHTML(artist.to_s)}</u>" }.join(", ")
            end
        end

        def list_artists(albuns)
            # Lista todos os artistas do json
            unique = Set.new
            albuns.each { |a| unique.merge(a['artists']) }
            unique.to_a.sort
        end
    end
end

Liquid::Template.register_filter(Jekyll::BrazillianRapFilters)
