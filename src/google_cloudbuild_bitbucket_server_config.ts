import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudbuildBitbucketServerConfigArgsConnectedRepositories {
  project_key: string;
  repo_slug: string;
}

export interface GoogleCloudbuildBitbucketServerConfigArgsSecrets {
  admin_access_token_version_name: string;
  read_access_token_version_name: string;
  webhook_secret_version_name: string;
}

export interface GoogleCloudbuildBitbucketServerConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudbuildBitbucketServerConfigArgs {
  api_key: string;
  config_id: string;
  host_uri: string;
  location: string;
  peered_network?: string;
  ssl_ca?: string;
  username: string;
  connected_repositories?: GoogleCloudbuildBitbucketServerConfigArgsConnectedRepositories[];
  secrets: GoogleCloudbuildBitbucketServerConfigArgsSecrets;
  timeouts?: GoogleCloudbuildBitbucketServerConfigArgsTimeouts;
}

export class google_cloudbuild_bitbucket_server_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudbuildBitbucketServerConfigArgs) {
    const meta = {connected_repositories:{isBlock:true},secrets:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudbuild_bitbucket_server_config", resourceName);
  }

  get api_key(): string {
    return `${this.resourceType}.${this.resourceName}.api_key`;
  }

  get config_id(): string {
    return `${this.resourceType}.${this.resourceName}.config_id`;
  }

  get host_uri(): string {
    return `${this.resourceType}.${this.resourceName}.host_uri`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get username(): string {
    return `${this.resourceType}.${this.resourceName}.username`;
  }

  get webhook_key(): string {
    return `${this.resourceType}.${this.resourceName}.webhook_key`;
  }
}
