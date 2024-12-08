import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVpcAccessConnectorArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_vpc_access_connector extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleVpcAccessConnectorArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vpc_access_connector", resourceName);
  }

  get connected_projects(): string {
    return `data.${this.resourceType}.${this.resourceName}.connected_projects`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_cidr_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_cidr_range`;
  }

  get machine_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.machine_type`;
  }

  get max_instances(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_instances`;
  }

  get max_throughput(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_throughput`;
  }

  get min_instances(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_instances`;
  }

  get min_throughput(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_throughput`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get subnet(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet`;
  }
}
