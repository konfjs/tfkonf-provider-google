import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSourcerepoRepositoryArgs {
  name: string;
  project?: string;
}

export class data_google_sourcerepo_repository extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSourcerepoRepositoryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_sourcerepo_repository", resourceName);
  }

  get create_ignore_already_exists(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_ignore_already_exists`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get pubsub_configs(): string {
    return `data.${this.resourceType}.${this.resourceName}.pubsub_configs`;
  }

  get size(): string {
    return `data.${this.resourceType}.${this.resourceName}.size`;
  }

  get url(): string {
    return `data.${this.resourceType}.${this.resourceName}.url`;
  }
}
