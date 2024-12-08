import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVpcAccessConnectorArgsSubnet {
  name?: string;
}

export interface GoogleVpcAccessConnectorArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleVpcAccessConnectorArgs {
  ip_cidr_range?: string;
  machine_type?: string;
  name: string;
  subnet?: GoogleVpcAccessConnectorArgsSubnet;
  timeouts?: GoogleVpcAccessConnectorArgsTimeouts;
}

export class google_vpc_access_connector extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVpcAccessConnectorArgs) {
    const meta = {subnet:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vpc_access_connector", resourceName);
  }

  get connected_projects(): string {
    return `${this.resourceType}.${this.resourceName}.connected_projects`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get max_instances(): string {
    return `${this.resourceType}.${this.resourceName}.max_instances`;
  }

  get max_throughput(): string {
    return `${this.resourceType}.${this.resourceName}.max_throughput`;
  }

  get min_instances(): string {
    return `${this.resourceType}.${this.resourceName}.min_instances`;
  }

  get min_throughput(): string {
    return `${this.resourceType}.${this.resourceName}.min_throughput`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
