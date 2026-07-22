#!/usr/bin/env sh
set -eu

if command -v hugo >/dev/null 2>&1; then
  exec hugo "$@"
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Hugo 0.145.0 or Docker is required." >&2
  exit 127
fi

project_dir=$(CDPATH='' cd -- "$(dirname -- "$0")/.." && pwd)
hugo_image=${HUGO_IMAGE:-ghcr.io/gohugoio/hugo:v0.145.0}

if [ "${1:-}" = "server" ]; then
  host_bind=127.0.0.1
  hugo_port=1313
  previous_arg=

  for arg in "$@"; do
    case "$previous_arg" in
      --bind)
        host_bind=$arg
        previous_arg=
        continue
        ;;
      --port)
        hugo_port=$arg
        previous_arg=
        continue
        ;;
    esac

    case "$arg" in
      --bind|--port)
        previous_arg=$arg
        ;;
      --bind=*)
        host_bind=${arg#--bind=}
        ;;
      --port=*)
        hugo_port=${arg#--port=}
        ;;
    esac
  done

  if [ "$host_bind" = "localhost" ]; then
    host_bind=127.0.0.1
  fi

  exec docker run --rm \
    --user "$(id -u):$(id -g)" \
    --env HOME=/tmp \
    --env HUGO_CACHEDIR=/tmp/hugo-cache \
    --env HUGO_ENV \
    --publish "$host_bind:$hugo_port:$hugo_port" \
    --volume "$project_dir:/project" \
    "$hugo_image" "$@" --bind 0.0.0.0
fi

if [ "${HUGO_READ_ONLY:-0}" = "1" ]; then
  exec docker run --rm \
    --user "$(id -u):$(id -g)" \
    --env HOME=/tmp \
    --env HUGO_CACHEDIR=/tmp/hugo-cache \
    --env HUGO_ENV \
    --volume "$project_dir:/project:ro" \
    --tmpfs "/project/resources:uid=$(id -u),gid=$(id -g)" \
    "$hugo_image" "$@"
fi

exec docker run --rm \
  --user "$(id -u):$(id -g)" \
  --env HOME=/tmp \
  --env HUGO_CACHEDIR=/tmp/hugo-cache \
  --env HUGO_ENV \
  --volume "$project_dir:/project" \
  "$hugo_image" "$@"
