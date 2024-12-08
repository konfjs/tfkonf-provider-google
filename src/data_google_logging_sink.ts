import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleLoggingSinkArgs {
  id: string;
}

export class data_google_logging_sink extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleLoggingSinkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_logging_sink", resourceName);
  }

  get bigquery_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.bigquery_options`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get destination(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination`;
  }

  get disabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.disabled`;
  }

  get exclusions(): string {
    return `data.${this.resourceType}.${this.resourceName}.exclusions`;
  }

  get filter(): string {
    return `data.${this.resourceType}.${this.resourceName}.filter`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get writer_identity(): string {
    return `data.${this.resourceType}.${this.resourceName}.writer_identity`;
  }
}
