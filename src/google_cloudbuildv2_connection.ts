import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfigAuthorizerCredential {
  user_token_secret_version: string;
}

export interface GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfigReadAuthorizerCredential {
  user_token_secret_version: string;
}

export interface GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfig {
  webhook_secret_secret_version: string;
  workspace: string;
  authorizer_credential: GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfigAuthorizerCredential;
  read_authorizer_credential: GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfigReadAuthorizerCredential;
}

export interface GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigAuthorizerCredential {
  user_token_secret_version: string;
}

export interface GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigReadAuthorizerCredential {
  user_token_secret_version: string;
}

export interface GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigServiceDirectoryConfig {
  service: string;
}

export interface GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfig {
  host_uri: string;
  ssl_ca?: string;
  webhook_secret_secret_version: string;
  authorizer_credential: GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigAuthorizerCredential;
  read_authorizer_credential: GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigReadAuthorizerCredential;
  service_directory_config?: GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigServiceDirectoryConfig;
}

export interface GoogleCloudbuildv2ConnectionArgsGithubConfigAuthorizerCredential {
  oauth_token_secret_version?: string;
}

export interface GoogleCloudbuildv2ConnectionArgsGithubConfig {
  app_installation_id?: number;
  authorizer_credential?: GoogleCloudbuildv2ConnectionArgsGithubConfigAuthorizerCredential;
}

export interface GoogleCloudbuildv2ConnectionArgsGithubEnterpriseConfigServiceDirectoryConfig {
  service: string;
}

export interface GoogleCloudbuildv2ConnectionArgsGithubEnterpriseConfig {
  app_id?: number;
  app_installation_id?: number;
  app_slug?: string;
  host_uri: string;
  private_key_secret_version?: string;
  ssl_ca?: string;
  webhook_secret_secret_version?: string;
  service_directory_config?: GoogleCloudbuildv2ConnectionArgsGithubEnterpriseConfigServiceDirectoryConfig;
}

export interface GoogleCloudbuildv2ConnectionArgsGitlabConfigAuthorizerCredential {
  user_token_secret_version: string;
}

export interface GoogleCloudbuildv2ConnectionArgsGitlabConfigReadAuthorizerCredential {
  user_token_secret_version: string;
}

export interface GoogleCloudbuildv2ConnectionArgsGitlabConfigServiceDirectoryConfig {
  service: string;
}

export interface GoogleCloudbuildv2ConnectionArgsGitlabConfig {
  ssl_ca?: string;
  webhook_secret_secret_version: string;
  authorizer_credential: GoogleCloudbuildv2ConnectionArgsGitlabConfigAuthorizerCredential;
  read_authorizer_credential: GoogleCloudbuildv2ConnectionArgsGitlabConfigReadAuthorizerCredential;
  service_directory_config?: GoogleCloudbuildv2ConnectionArgsGitlabConfigServiceDirectoryConfig;
}

export interface GoogleCloudbuildv2ConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudbuildv2ConnectionArgs {
  annotations?: { [key: string]: string };
  disabled?: boolean;
  location: string;
  name: string;
  bitbucket_cloud_config?: GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfig;
  bitbucket_data_center_config?: GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfig;
  github_config?: GoogleCloudbuildv2ConnectionArgsGithubConfig;
  github_enterprise_config?: GoogleCloudbuildv2ConnectionArgsGithubEnterpriseConfig;
  gitlab_config?: GoogleCloudbuildv2ConnectionArgsGitlabConfig;
  timeouts?: GoogleCloudbuildv2ConnectionArgsTimeouts;
}

export class google_cloudbuildv2_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudbuildv2ConnectionArgs) {
    const meta = {bitbucket_cloud_config:{isBlock:true,authorizer_credential:{isBlock:true},read_authorizer_credential:{isBlock:true}},bitbucket_data_center_config:{isBlock:true,authorizer_credential:{isBlock:true},read_authorizer_credential:{isBlock:true},service_directory_config:{isBlock:true}},github_config:{isBlock:true,authorizer_credential:{isBlock:true}},github_enterprise_config:{isBlock:true,service_directory_config:{isBlock:true}},gitlab_config:{isBlock:true,authorizer_credential:{isBlock:true},read_authorizer_credential:{isBlock:true},service_directory_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudbuildv2_connection", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get installation_state(): string {
    return `${this.resourceType}.${this.resourceName}.installation_state`;
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

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
