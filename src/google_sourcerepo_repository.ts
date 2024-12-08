import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSourcerepoRepositoryArgsPubsubConfigs {
  message_format: string;
  topic: string;
}

export interface GoogleSourcerepoRepositoryArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSourcerepoRepositoryArgs {
  create_ignore_already_exists?: boolean;
  name: string;
  pubsub_configs?: GoogleSourcerepoRepositoryArgsPubsubConfigs[];
  timeouts?: GoogleSourcerepoRepositoryArgsTimeouts;
}

export class google_sourcerepo_repository extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSourcerepoRepositoryArgs) {
    const meta = {pubsub_configs:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_sourcerepo_repository", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get size(): string {
    return `${this.resourceType}.${this.resourceName}.size`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
